import React from "react";
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

function Shortperps() {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState(60);

  const handleLeverage = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div style={{ color: "white", width: "100%", marginTop: "30px" }}>
      <div style={{ width: "100%", margin: "10px 0px" }}>
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
      </div>
      <div style={{ margin: "10px 0px" }}>
        <div
          style={{
            color: "white",
            textAlign: "left",
            padding: "5px",
            color: "rgb(168 172 209 / var(--tw-text-opacity))",
            "--tw-text-opacity": 1,
          }}
        >
          Price
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <input
            type="text"
            placeholder="
            0.0000"
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
            <div style={{ padding: "0px 5px" }}>USDC</div>
          </div>
        </div>
        <div style={{ margin: "30px 0px", borderTop: "1px solid gray" }}>
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
        <div>
          <Button
            variant="outlined"
            style={{
              padding: "10px 30px",
              background:
                "linear-gradient(312.73deg,#ffd99f -5.69%,#b5b8ff 108.02%)",
              color: "black",
              border: "none",
              borderRadius: "10px",
              width: "100%",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Confirm Short
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Shortperps;
