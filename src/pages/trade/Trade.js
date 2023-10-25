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
import Footer from "../../components/footer/Footer";
import LongPosition from "../../components/position/LongPosition";
import ShortPosition from "../../components/position/ShortPosition";

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
  const [showLongPosition, setshowLongPosition] = useState(false);
  const [showShortPosition, setshowShortPosition] = useState(false);
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
        document.getElementById("tradingview_6286b") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:ETHUSD",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_6286b",
        });
      }
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "85vh" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} columns={16} className="grid-ele-main">
            <Grid item xs={11} className="grid-ele">
              <Item
                style={{
                  height: "70vh",
                  justifyContent: "center",
                }}
                className="trade-left-grid"
              >
                <div
                  className="tradingview-widget-container"
                  style={{ height: "100%", width: "100%" }}
                >
                  <div
                    id="tradingview_6286b"
                    style={{ height: "calc(100% - 32px)", width: "100%" }}
                  />
                </div>
              </Item>
            </Grid>
            <Grid item xs={5} className="grid-ele2">
              <Item
                className="trade-right-grid"
                style={{
                  background:
                    activeButton === "longperps"
                      ? "linear-gradient(180deg,rgba(12,88,81,.2) 3.86%,rgba(0,0,0,0) 17.9%),linear-gradient(132.03deg,rgba(21,24,37,.5) 0%,rgba(11,10,7,.5) 100%)"
                      : "linear-gradient(180deg,rgba(221,64,116,.2) 3.86%,rgba(0,0,0,0) 17.9%),linear-gradient(132.03deg,rgba(21,24,37,.5) 0%,rgba(11,10,7,.5) 100%)",
                  height: "70vh",
                }}
              >
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
                {showLongPerps && (
                  <Longperps setshowLongPosition={setshowLongPosition} />
                )}
                {showShortPerps && (
                  <Shortperps setshowShortPosition={setshowShortPosition} />
                )}
              </Item>
            </Grid>
          </Grid>
          <div>
            {showLongPosition ? <LongPosition /> : null}
            {showShortPosition ? <ShortPosition /> : null}
          </div>
        </Box>
      </div>

      <Footer />
    </div>
  );
}

export default Trade;
