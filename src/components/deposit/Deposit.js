import React, { useState } from "react";

import "../../pages/vault/Vault.css";
import { Button } from "@mui/material";
import "../../pages/vault/Vault.css";

import { ethers } from "ethers";
import { vaultInstance } from "../vaultInstance";
import { useAccount } from "wagmi";

function Deposit() {
  const { address, connector, isConnected } = useAccount();

  const [amount, setAmount] = useState("");

  const handleDeposit = async () => {
    try {
      // Get the contract instance
      const vaultContract = await vaultInstance();

      // Get the amount to deposit (you may get this from user input)
      // For example, let's assume you want to deposit 1 ETH

      console.log(amount);
      const weiValue = ethers.utils.parseEther(amount.toString());

      // Call the deposit function on the contract'
      console.log(address);
      const transaction = await vaultContract.deposit(weiValue, address);
      console.log(transaction.hash);

      // Wait for the transaction to be mined (you can show a loading indicator here)
      await transaction.wait();

      // Handle successful deposit (transaction mined)
      console.log("Deposit successful");
    } catch (error) {
      // Handle any errors here
      console.error("Error depositing:", error);
    }
  };

  return (
    <div
      style={{
        width: "60%",
        background:
          " linear-gradient(180deg,rgba(12,88,81,.2) 3.86%,rgba(0,0,0,0) 17.9%),linear-gradient(132.03deg,rgba(21,24,37,.5) 0%,rgba(11,10,7,.5) 100%)",
        padding: "30px 40px",
        margin: "50px",
        maxWidth: "900px",
        borderRadius: "5px",
        minWidth: "400px",
      }}
      className="d-main"
    >
      <div>
        <div
          style={{ color: "white", textAlign: "left", padding: " 10px 5px" }}
        >
          Amount
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <input
            type="text"
            placeholder="0"
            onChange={(e) => setAmount(e.target.value)}
            style={{
              background: "none",
              outline: "none",
              borderRadius: "10px",
              border: "1px solid rgb(168 172 209 / var(--tw-text-opacity))",
              color: "white",
              padding: "20px 15px",
              width: "100%",
            }}
          ></input>
          <div
            style={{
              position: "absolute",
              right: "25px",
              top: "20px",
              color: "white",
            }}
          >
            sDAI
          </div>
        </div>
      </div>
      <div>
        {/* <div
          style={{
            color: "white",
            textAlign: "left",
            padding: "10px 5px",
          }}
        >
          Select chain
        </div> */}
        {/* <FormControl
          sx={{
            width: "100%",
          }}
        >
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            style={{
              color: "white",
              border: "1px solid rgb(168 172 209 / var(--tw-text-opacity))",
              outline: "none",
              borderRadius: "10px",
            }}
            className="select-chain"
          >
            <MenuItem value="">
              <em>Select</em>
            </MenuItem>
            <MenuItem value={10}>Goerli</MenuItem>
            <MenuItem value={20}>Scroll</MenuItem>
            <MenuItem value={30}>polygon mumbai</MenuItem>
          </Select>
        </FormControl> */}
        <div
          style={{
            margin: "30px 0px",
          }}
        >
          {amount <= 0 ? (
            <>
              <Button
                variant="outlined"
                disabled
                style={{
                  width: "100%",
                  padding: "10px",
                  background:
                    "linear-gradient(312.73deg,#ffd99f -5.69%,#b5b8ff 108.02%)",
                  color: "black",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "700",
                  opacity: "30%",
                }}
                onClick={handleDeposit}
              >
                Deposit
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                style={{
                  width: "100%",
                  padding: " 10px",
                  background:
                    "linear-gradient(312.73deg,#ffd99f -5.69%,#b5b8ff 108.02%)",
                  color: "black",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "700",
                }}
                onClick={handleDeposit}
              >
                Deposit
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Deposit;