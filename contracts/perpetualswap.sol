// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./vault.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PerpetualSwap {
    address public owner;
    Vault public vault;
    AggregatorV3Interface internal dataFeed;
    uint256 public pricePerETH;
    uint256 public fundingRate;
    uint256 public lastFundingTime;

    struct Position {
        address trader;
        uint256 entryPrice;
        uint256 size;
        bool isLong;
    }

    mapping(address => Position) public positions;
    mapping(address => uint256) public collateral;

    constructor(address _vaultAddress) {
        owner = msg.sender;
        vault = Vault(_vaultAddress);
        dataFeed = AggregatorV3Interface(
            0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
        ); // Eth-USD pair --> Sepolia Testnet/ Mumbai Testnet
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function getVaultAddress() public view returns (address) {
        return address(vault);
    }

    function getPricePerETH() public view returns (uint256) {
        return pricePerETH;
    }

    function getFundingRate() public view returns (uint256) {
        return fundingRate;
    }

    function getLastFundingTime() public view returns (uint256) {
        return lastFundingTime;
    }

    function getPositionData(address trader)
        public
        view
        returns (
            uint256 entryPrice,
            uint256 size,
            bool isLong
        )
    {
        Position storage position = positions[trader];
        return (position.entryPrice, position.size, position.isLong);
    }

    function getCollateralBalance(address trader)
        public
        view
        returns (uint256)
    {
        return collateral[trader];
    }

    function getETHUSD() public view returns (int256) {
        (
            ,
            /* uint80 roundID */
            int256 answer,
            ,
            ,

        ) = /*uint startedAt*/
            /*uint timeStamp*/
            /*uint80 answeredInRound*/
            dataFeed.latestRoundData();
        return answer;
    }

    function depositCollateral() external payable {
        require(msg.value > 0, "Collateral must be greater than 0");
        collateral[msg.sender] += msg.value;
    }

    function openPosition(
        bool isLong,
        uint256 entryPrice,
        uint256 size
    ) external {
        require(size > 0, "Size must be greater than 0");
        require(entryPrice > 0, "Entry price must be greater than 0");
        require(
            collateral[msg.sender] >= entryPrice * size,
            "Insufficient collateral"
        );

        collateral[msg.sender] -= entryPrice * size;

        int256 currentPrice = getETHUSD();
        uint256 currentPriceUint = uint256(currentPrice);

        positions[msg.sender] = Position(
            msg.sender,
            currentPriceUint,
            size,
            isLong
        );
    }

    function closePosition() external {
        Position storage position = positions[msg.sender];
        require(position.trader == msg.sender, "No position found");

        int256 currentPrice = getETHUSD();
        uint256 currentPriceUint = uint256(currentPrice);

        uint256 profitOrLoss = (currentPriceUint - position.entryPrice) *
            position.size;

        if (position.isLong) {
            require(profitOrLoss >= 0, "Loss on long position");
        } else {
            require(profitOrLoss <= 0, "Loss on short position");
        }

        collateral[msg.sender] += profitOrLoss;

        delete positions[msg.sender];
    }

    function withdraw() external {
        require(collateral[msg.sender] > 0, "No collateral to withdraw");

        int256 currentPrice = getETHUSD();
        uint256 currentPriceUint = uint256(currentPrice);

        uint256 amount = (currentPriceUint * collateral[msg.sender]) /
            pricePerETH;

        collateral[msg.sender] = 0;

        payable(msg.sender).transfer(amount);
    }

    function setVaultAddress(address newVaultAddress) external {
        require(
            msg.sender == owner,
            "Only the owner can set the Vault address"
        );
        vault = Vault(newVaultAddress);
    }

    function setFundingRate(uint256 _rate) external onlyOwner {
        fundingRate = _rate;
    }

    function updatePrice() external {
        pricePerETH = 4000; // For simplicity, using a fixed price for this example
    }

    function withdrawFees(uint256 amount) external onlyOwner {
        // Logic to allow the owner to withdraw collected fees
    }
}
