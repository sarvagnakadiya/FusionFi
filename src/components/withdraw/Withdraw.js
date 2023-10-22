import React from "react";

import "../../pages/vault/Vault.css";
import { Button } from "@mui/material";

function Withdraw() {
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
        <div style={{ color: "white", textAlign: "left", padding: "10px 5px" }}>
          Amount
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <input
            type="text"
            placeholder="0"
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
        </div>
      </div>
      <div>
        <div
          style={{
            margin: "30px 0px",
          }}
        >
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
          >
            Withdraw
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
