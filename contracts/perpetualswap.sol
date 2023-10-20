// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./vault.sol";  

contract PerpetualSwap {
    address public owner;
    Vault public vault;
    
    // Oracle-related state variables
    address public oracle;
    uint256 public pricePerETH; // Price of 1 ETH in USD
    uint256 public fundingRate; // Perpetual funding rate
    uint256 public lastFundingTime;
    
    struct Position {
        address trader;
        uint256 entryPrice;
        uint256 size;
        bool isLong; // true for long, false for short
    }

    mapping(address => Position) public positions;
    mapping(address => uint256) public collateral;

    constructor(address _vaultAddress, address _oracleAddress) {
        owner = msg.sender;
        vault = Vault(_vaultAddress);
        oracle = _oracleAddress;
    }

    // Modifier to restrict access to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function depositCollateral() external payable {
        require(msg.value > 0, "Collateral must be greater than 0");
        collateral[msg.sender] += msg.value;
    }

    function openPosition(bool isLong, uint256 entryPrice, uint256 size) external {
        require(size > 0, "Size must be greater than 0");
        require(entryPrice > 0, "Entry price must be greater than 0");
        require(collateral[msg.sender] >= entryPrice * size, "Insufficient collateral");

        // Lock up collateral in the Vault
        collateral[msg.sender] -= entryPrice * size;

        positions[msg.sender] = Position(msg.sender, entryPrice, size, isLong);
    }

    function closePosition() external {
        Position storage position = positions[msg.sender];
        require(position.trader == msg.sender, "No position found");

        // Calculate profit or loss based on the current price (for simplicity, we use a fixed price here)
        uint256 currentPrice = pricePerETH; // Use the Oracle price
        uint256 profitOrLoss = (currentPrice - position.entryPrice) * position.size;

        if (position.isLong) {
            require(profitOrLoss >= 0, "Loss on long position");
        } else {
            require(profitOrLoss <= 0, "Loss on short position");
        }

        // Release collateral
        collateral[msg.sender] += profitOrLoss;

        // Clear the position
        delete positions[msg.sender];
    }

    function withdraw() external {
        require(collateral[msg.sender] > 0, "No collateral to withdraw");
        
        uint256 amount = collateral[msg.sender];
        collateral[msg.sender] = 0;
        
        payable(msg.sender).transfer(amount);
    }

    // Only the contract owner can set the Vault address in case of an upgrade
    function setVaultAddress(address newVaultAddress) external {
        require(msg.sender == owner, "Only the owner can set the Vault address");
        vault = Vault(newVaultAddress);
    }
    
    // Function to set the funding rate
    function setFundingRate(uint256 _rate) external onlyOwner {
        fundingRate = _rate;
    }

    // Function to update the price from the Oracle
    function updatePrice() external {
        //Fetching the price from the Oracle
        // For simplicity, we use a fixed price for this example
        pricePerETH = 4000; // 1 ETH = 4000 USD (example)
    }

    // Function to withdraw fees
    function withdrawFees(uint256 amount) external onlyOwner {
        // Implement logic to allow the owner to withdraw collected fees
    }
}
