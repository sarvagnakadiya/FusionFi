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

import Footer from "../../components/footer/Footer";

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

function ShortPosition() {
    const [activeButton, setActiveButton] = useState("shortperps");
    const [showLongPosition, setShowLongPosition] = useState(false); // New state variable
  
    const handleLongPositionOpen = () => {
      // Set the state variable to true when the "Confirm Long" button is clicked
      setShowLongPosition(true);
    };
  
  
    const handleLongPerpsClick = () => {
     
      setActiveButton("shortperps");
    };

  return (
    <div>
     
        <Box sx={{ flexGrow: 1 }}>
          
        
          <Grid container spacing={0} columns={16} className="grid-ele-main">
            <Grid item xs={16} className="grid-ele">
              <Item
                style={{
                
                  justifyContent: "center",
                }}
                className="trade-left-grid"
              >
               <div>
               <ButtonGroup
                  disableElevation
                  variant="contained"
                  aria-label="Disabled elevation buttons"
                  style={{ width: "100%", borderRadius: "20px", }}
                >
                   <Button
                    onClick={handleLongPerpsClick}
                    style={{
                      color:
                        activeButton === "shortperps" ? "black" : "#f5a9a9",
                      "--tw-text-opacity": 1,
                      background:
                        activeButton === "shortperps" ? "#f5a9a9" : "none",
                      fontWeight: "700",
                      width: "100%",
                      border: "none",
                    }}
                  >
                    Position
                  </Button>
                  
                
                </ButtonGroup>
                
                 
               </div>
               <div style={{display:"flex", backgroundColor:"#171515", margin:"30px",padding:"10px",alignItems:"center",width:"30%",justifyContent:"space-around",borderRadius:"10px"}}>
                    <div style={{color:"red",border:"1px solid red",padding:"10px 30px"}}>Short</div>
                    <div style={{color:"white", }}>867.00 ETH
                        <span style={{color:"white", padding:"0px 20px "}}>$66986</span>
                    </div>
                   
                </div>
            <div style={{display:"flex",margin:"20px 0px",color:"white", width:"30%",alignItems:"center",width:"30%",justifyContent:"space-around",borderRadius:"10px"}}>
                        <div>Leverage</div>
                        <div> 786578</div>
                    </div>
                    <div style={{display:"flex",color:"white", width:"30%",alignItems:"center",width:"30%",justifyContent:"space-around",borderRadius:"10px"}}>
                        <div>Liquidation price</div>
                        <div> $7879</div>
                    </div>
          
              
              </Item>
              
            </Grid>
           
          </Grid>
          
        </Box>
    
      

      
    </div>
  );
}

export default ShortPosition;
