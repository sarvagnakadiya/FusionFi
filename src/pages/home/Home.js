import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "../home/Home.css";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { NavLink } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ConnectButtonCustom from "../../components/ConnectButton/ConnectButtonCustom";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#0a0a0e" : "#000",

  ...theme.typography.body2,
  padding: theme.spacing(4),
  margin: theme.spacing(5),
  textAlign: "center",
  display: "flex",
  color: "white",

  flexDirection: "column",
  alignItems: "center",
  //   border: "1px solid rgb(168 172 209 / var(--tw-text-opacity))",
  "--tw-text-opacity": 1,
  border: "1px solid rgb(168 172 209 / var(--tw-text1-opacity))",
  "--tw-text1-opacity": 0.2,

  color: theme.palette.text.secondary,
}));

function Home() {
  const { address, isConnected, isDisconnected } = useAccount();
  const walletAddress = address;
  console.log(walletAddress);
  const navigate = useNavigate();
  const handleDashboardNavigation = () => {
    if (isConnected) {
      navigate("/trade");
    } else {
      alert("Please connect your wallet");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="hm-sec1">
        <p class="sc-a5437e8a-0 igVsvQ sc-abed4a29-2 bewfev">
          TRADE SYNTHETIC PERPETUALS
        </p>
        <p class="sc-a5437e8a-0 lkDHwQ sc-abed4a29-3 fmBYuZ">
          Gain exposure to a variety of assets with up to{" "}
          <b class="sc-abed4a29-1 kDxRFL">50x leverage</b> and{" "}
          <b class="sc-abed4a29-1 kDxRFL">deep liquidity</b>
        </p>
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
              margin: "20px",
              fontWeight: "700",
              cursor: "pointer",
            }}
            onClick={() => handleDashboardNavigation()}
          >
            Trade Now
          </Button>
        </div>
        <div class="sc-c7b95291-0 sc-abed4a29-4 gYjLfv cEwxfH">
          <img src="home-ss.png" class="sc-abed4a29-5 cfsEuM"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
