import React from "react";
import Button from "@mui/material/Button";
import "../position/Position.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const buttons = [
  <Button
    key="one"
    style={{
      color: " rgb(168 172 209 / var(--tw-text-opacity))",

      "  --tw-text-opacity": 1,
      borderColor: " rgb(168 172 209 / var(--tw-text-opacity))",
    }}
  >
    Position
  </Button>,
  <Button
    key="two"
    style={{
      color: " rgb(168 172 209 / var(--tw-text-opacity))",

      "  --tw-text-opacity": 1,
      borderColor: " rgb(168 172 209 / var(--tw-text-opacity))",
    }}
  >
    Orders
  </Button>,
];

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

function ShortPosition() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columns={16} className="grid-ele-main">
        <Grid item xs={16} className="grid-ele-pos">
          <Item
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
            }}
            className="trade-left-grid-pos"
          >
            <div>
              {" "}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup size="large" aria-label="large button group">
                  {buttons}
                </ButtonGroup>
              </Box>
            </div>
            <div
              style={{
                display: "flex",
                background:
                  "linear-gradient(rgba(221, 64, 116, 0.2) 3.86%, rgba(0, 0, 0, 0) 17.9%), linear-gradient(132.03deg, rgba(21, 24, 37, 0.5) 0%, rgba(11, 10, 7, 0.5) 100%)",
                margin: "30px auto",
                padding: " 20px 0px",
                alignItems: "center",
                width: "30%",
                justifyContent: "space-around",
                borderRadius: "10px",
              }}
              className="position-main"
            >
              <div
                style={{
                  color: " black",

                  "  --tw-text-opacity": 1,
                  background: "rgb(245, 169, 169)",
                  padding: "10px 30px",
                  borderRadius: "5px",
                }}
              >
                Short
              </div>
              <div style={{ color: "white" }}>
                867.00{" "}
                <span
                  style={{
                    border: "1px solid gray",
                    padding: "5px 10px",
                    backgroundColor: "gray",
                    borderRadius: "5px",
                  }}
                >
                  ETH
                </span>
                <br />
              </div>
            </div>
            <table
              style={{
                color: "white",
                margin: "10px auto",
                alignItems: "center",
                width: "30%",
                paddingLeft: "60px",
              }}
              className="table-pos"
            >
              <tr
                style={{
                  color: " rgb(168 172 209 / var(--tw-text-opacity))",

                  "  --tw-text-opacity": 1,
                  borderColor: " rgb(168 172 209 / var(--tw-text-opacity))",
                }}
              >
                <th>Leverage</th>
                <th>Liquidation price</th>
              </tr>
              <tr>
                <td>9848</td>
                <td>$56.00</td>
              </tr>
            </table>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ShortPosition;
