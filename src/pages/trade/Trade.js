import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Longperps from "../../components/long-perps/Longperps";
import Shortperps from "../../components/short-perps/Shortperps";
import "../trade/Trade.css";

let tvScriptLoadingPromise;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#0a0a0e" : "#000",
  boxShadow: " 0 1px 7px #465b63c7",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  margin: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  color: "white",
  flexDirection: "column",
  alignItems: "center",
  //   border: "1px solid rgb(168 172 209 / var(--tw-text-opacity))",
  "--tw-text-opacity": 1,
  borderBottom: "1px solid rgb(168 172 209 / var(--tw-text1-opacity))",
  "--tw-text1-opacity": 0.2,

  color: theme.palette.text.secondary,
}));

function Trade() {
  const [showLongPerps, setshowLongPerps] = useState(true);
  const [showShortPerps, setshowShortPerps] = useState(false);
  const [activeButton, setActiveButton] = useState("longperps");

  const handleLongPerpsClick = () => {
    setshowLongPerps(true);
    setshowShortPerps(false);
    setActiveButton("longperps");
  };

  const handleShortPerpsClick = () => {
    setshowShortPerps(true);
    setshowLongPerps(false);
    setActiveButton("shortperps");
  };
  // ............tranding view...........
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_9efaf") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "COINBASE:BTCUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "8",
          locale: "en",
          enable_publishing: false,
          withdateranges: true,
          allow_symbol_change: true,
          container_id: "tradingview_9efaf",
        });
      }
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} columns={16}>
            <Grid item xs={12}>
              <Item
                style={{
                  height: "70vh",
                  justifyContent: "center",
                }}
              >
                <div
                  className="tradingview-widget-container"
                  style={{ height: "100%", width: "100%" }}
                >
                  <div
                    id="tradingview_9efaf"
                    style={{ height: "calc(100% - 20px)", width: "100%" }}
                  />
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item style={{ height: "70vh" }}>
                {" "}
                <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                  style={{ width: "100%", borderRadius: "20px" }}
                >
                  <Button
                    onClick={handleLongPerpsClick}
                    style={{
                      color: activeButton === "longperps" ? "black" : "#7fe7af",
                      "--tw-text-opacity": 1,
                      background:
                        activeButton === "longperps" ? "#7fe7af" : "none",
                      fontWeight: "700",
                      width: "50%",
                      border: "none",
                    }}
                  >
                    Long
                  </Button>
                  <Button
                    onClick={handleShortPerpsClick}
                    style={{
                      color:
                        activeButton === "shortperps" ? "black" : "#f5a9a9",
                      "--tw-text-opacity": 1,
                      background:
                        activeButton === "shortperps" ? "#f5a9a9" : "none",
                      fontWeight: "700",
                      width: "50%",
                      border: "none",
                    }}
                  >
                    Short
                  </Button>
                </ButtonGroup>
                {showLongPerps && <Longperps />}
                {showShortPerps && <Shortperps />}
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Trade;
