import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "../vault/Vault.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import Deposit from "../../components/deposit/Deposit";
import Withdraw from "../../components/withdraw/Withdraw";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#0a0a0e" : "#000",
  boxShadow: " 0 1px 7px #465b63c7",

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
  borderBottom: "1px solid rgb(168 172 209 / var(--tw-text1-opacity))",
  "--tw-text1-opacity": 0.2,

  color: theme.palette.text.secondary,
}));

function Vault() {
  const [showDeposit, setShowDeposit] = useState(true);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [activeButton, setActiveButton] = useState("deposit");

  const handleDepositClick = () => {
    setShowDeposit(true);
    setShowWithdraw(false);
    setActiveButton("deposit");
  };

  const handleWithdrawClick = () => {
    setShowWithdraw(true);
    setShowDeposit(false);
    setActiveButton("withdraw");
  };
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "85vh" }}>
        <Grid container columns={16} className="grid-ele-main">
          <Grid xs={8} className="grid-vault">
            <Item
              style={{ height: "50vh", justifyContent: "center" }}
              className="valut-item"
            >
              <img src="wallet-icon.webp" className="trade-img" />
              <NavLink to="/trade">
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
                  Start Trading
                </Button>
              </NavLink>
            </Item>
          </Grid>
          <Grid xs={8} className="grid-vault2">
            <Item style={{ height: "50vh" }} className="valut-item2">
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                  className="wlt-flex"
                >
                  <div
                    style={{
                      color: "white",
                      color: "rgb(168 172 209 / var(--tw-text-opacity))",
                      "--tw-text-opacity": 1,
                      fontSize: "2rem",
                    }}
                    className="wlt-text"
                  >
                    Wallet
                  </div>
                  <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled elevation buttons"
                    background="none"
                  >
                    <Button
                      onClick={handleDepositClick}
                      style={{
                        color: activeButton === "deposit" ? "black" : "white",
                        "--tw-text-opacity": 1,
                        background:
                          activeButton === "deposit"
                            ? "rgb(214 216 242 / var(--tw-text-opacity))"
                            : "none",
                        fontWeight: "700",
                      }}
                      className="custom-deposit-button"
                    >
                      Deposit
                    </Button>
                    <Button
                      onClick={handleWithdrawClick}
                      style={{
                        color: activeButton === "withdraw" ? "black" : "white",
                        "--tw-text-opacity": 1,
                        background:
                          activeButton === "withdraw"
                            ? "rgb(214 216 242 / var(--tw-text-opacity))"
                            : "none",
                        fontWeight: "700",
                      }}
                      className="custom-withdraw-button"
                    >
                      Withdraw
                    </Button>
                  </ButtonGroup>
                </div>
                {showDeposit && <Deposit />}
                {showWithdraw && <Withdraw />}
              </div>
            </Item>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default Vault;
