import React, {useState} from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";

import { ethers } from "ethers";
import { perpInstance } from "../vaultInstance";
import { useAccount } from "wagmi";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "white" : "white",
  height: 2,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    background: " linear-gradient(90deg,#4dd70c 21%,#ff5c00 58%,#ff0e0e 93%)",

    borderRadius: "5px",
    borderRadius: "50px",
    boxShadow: iOSBoxShadow,
    "&:focus, &:hover, &.Mui-active": {
      boxShadow:
        "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  "& .MuiSlider-valueLabel": {
    fontSize: 12,
    fontWeight: "normal",
    top: -6,
    backgroundColor: "unset",
    color: theme.palette.text.primary,
    "&:before": {
      display: "none",
    },
    "& *": {
      background: "transparent",
      color: theme.palette.mode === "dark" ? "white" : "white",
    },
  },
  "& .MuiSlider-track": {
    border: "none",
    background: " linear-gradient(90deg,#4dd70c 21%,#ff5c00 58%,#ff0e0e 93%)",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    background: "'#bfbfbf'",
  },
  "& .MuiSlider-mark": {
    background: " '#bfbfbf'",
    height: 8,
    width: 1,
    "&.MuiSlider-markActive": {
      opacity: 1,
      backgroundColor: "currentColor",
    },
  },
}));
function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

function Longperps() {
  const [age, setAge] = useState("");
  const [value, setValue] = useState(60);
  const [amount, setAmount] = useState("");

  const handleLeverage = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  const openPosition = async () => {
    // Prepare the parameters for the openPosition function
    const isLong = true; // Change to your desired value
    const entryPrice = 100; // Change to your desired value
    const size = 1; // Change to your desired value

    try {

      const perpContract = await perpInstance();
      // Send the transaction to the Ethereum blockchain
      const tx = await perpContract.openPosition(isLong, entryPrice, size);

      // You can listen for transaction confirmation or do other actions here
      console.log("Transaction sent:", tx);
    } catch (error) {
      console.error("Error opening position:", error);
    }
  };

  return (
    <div
      style={{ color: "white", width: "100%", marginTop: "30px" }}
      className="longperps-main"
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
      
      {/* <div style={{ width: "100%", margin: "10px 0px" }}>
        <Typography
          gutterBottom
          sx={{
            textAlign: "left",
            color: "rgb(168 172 209 / var(--tw-text-opacity))",
            "--tw-text-opacity": 1,
          }}
        >
          Select chain
        </Typography>
        <FormControl sx={{ width: "100%" }}>
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
      </div> */}
      {/* <div style={{ margin: "10px 0px" }}>
        <div
          style={{
            color: "white",
            textAlign: "left",
            padding: "5px",
            color: "rgb(168 172 209 / var(--tw-text-opacity))",
            "--tw-text-opacity": 1,
          }}
        >
          Amount
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <input
            type="text"
            placeholder=" 0.0000"
            style={{
              background: "none",
              outline: "none",
              borderRadius: "10px",
              border: "1px solid rgb(168 172 209 / var(--tw-text-opacity))",
              color: "white",
              padding: "20px 15px",
              width: "100%",
              fontSize: "1.3rem",
            }}
          ></input>
          <div
            style={{
              position: "absolute",
              right: "25px",
              top: "20px",
              display: "flex",
            }}
          >
            <div>sDAI</div>
          </div>
        </div> */}
        <div
          style={{ margin: "30px 0px", borderTop: "1px solid gray" }}
          className="longperps-border"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <Typography
              gutterBottom
              sx={{
                textAlign: "left",
                color: "rgb(168 172 209 / var(--tw-text-opacity))",
                "--tw-text-opacity": 1,
                padding: "10px 0px",
              }}
            >
              Liquidation price
            </Typography>{" "}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <Typography
              gutterBottom
              sx={{
                textAlign: "left",
                color: "white",
                padding: "10px 0px",
              }}
            >
              $0
            </Typography>{" "}
          </div>

          <Box sx={{ width: "80%", margin: "30px auto" }}>
            <IOSSlider
              aria-label="ios slider"
              defaultValue={60}
              marks={marks}
              onChange={handleLeverage}
              value={value}
              valueLabelDisplay="on"
              sx={{ color: "white" }}
              valueLabelFormat={(value) => `${value}%`}
            />
          </Box>
        </div>
        {amount <= 0 ? (
          <>
        <div>
          <Button
            variant="outlined"
            disabled
            style={{
              padding: "10px 30px",
              background:
                "linear-gradient(312.73deg,#ffd99f -5.69%,#b5b8ff 108.02%)",
              color: "black",
              border: "none",
              borderRadius: "10px",
              width: "60%",
              fontWeight: "700",
              cursor: "pointer",
              opacity: "30%",
            }}
            className="long-short-btn"
           onClick={openPosition}
          >
            Confirm Long
          </Button> 
        </div>
        </>
        ) : (
          <>
            <Button
              variant="outlined"
              style={{
                padding: "10px 30px",
                background:
                  "linear-gradient(312.73deg,#ffd99f -5.69%,#b5b8ff 108.02%)",
                color: "black",
                border: "none",
                borderRadius: "10px",
                width: "60%",
                fontWeight: "700",
                cursor: "pointer",
              }}
             onClick={openPosition}
            >
              Confirm Long
            </Button>
          </>


        )}
      {/* </div> */}
    </div>
  );
}

export default Longperps;
