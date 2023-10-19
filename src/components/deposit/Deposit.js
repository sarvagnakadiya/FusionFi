import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../../pages/vault/Vault.css";
import { Button } from "@mui/material";

function Deposit() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div
      style={{
        width: "60%",
        background:
          " linear-gradient(180deg,rgba(12,88,81,.2) 3.86%,rgba(0,0,0,0) 17.9%),linear-gradient(132.03deg,rgba(21,24,37,.5) 0%,rgba(11,10,7,.5) 100%)",
        padding: "30px",
        margin: "50px",
        maxWidth: "900px",
        borderRadius: "5px",
        minWidth: "300px",
      }}
    >
      <div>
        <div style={{ color: "white", textAlign: "left", padding: "5px" }}>
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
          <div style={{ position: "absolute", right: "25px", top: "20px" }}>
            <svg
              data-name="86977684-12db-4850-8f30-233a7c267d11"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2000 2000"
              class="usdc small"
              width="20px"
            >
              <path
                d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z"
                fill="#2775ca"
              ></path>
              <path
                d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z"
                fill="#fff"
              ></path>
              <path
                d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z"
                fill="#fff"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            color: "white",
            textAlign: "left",
            padding: "5px",
          }}
        >
          Select chain
        </div>
        <FormControl
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
        </FormControl>
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
            Deposit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
