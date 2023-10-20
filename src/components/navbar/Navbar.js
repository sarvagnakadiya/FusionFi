import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ConnectButtonCustom from "../ConnectButton/ConnectButtonCustom";
import "../navbar/Navbar.css";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const activeLinkStyle = {
    textDecoration: "none", // Define the color you want for active links here
  };
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: " 0 2px 20px #465b63c7",
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
            {" "}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                // borderRight: "1px solid",
                paddingRight: "10px",
              }}
            >
              <img src="FusionFi.png" style={{ width: "150px" }} />
            </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of the current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/" style={activeLinkStyle}>
                  <Typography textAlign="center">Home</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/vault" style={activeLinkStyle}>
                  <Typography textAlign="center">Vault</Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <NavLink to="/trade" style={activeLinkStyle}>
                  <Typography textAlign="center">Trade</Typography>
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
          <NavLink to="/">
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img src="FusionFi.png" style={{ width: "150px" }} />
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink to="/" style={activeLinkStyle}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  margin: 2,
                  color: "rgb(168 172 209 / var(--tw-text-opacity))",
                  "--tw-text-opacity": 1,
                  display: "block",
                }}
              >
                Home
              </Button>
            </NavLink>
            <NavLink to="/vault" style={activeLinkStyle}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  margin: 2,
                  color: "rgb(168 172 209 / var(--tw-text-opacity))",
                  display: "block",
                  "--tw-text-opacity": 1,
                }}
              >
                Vault
              </Button>
            </NavLink>
            <NavLink to="/trade" style={activeLinkStyle}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  margin: 2,
                  color: "rgb(168 172 209 / var(--tw-text-opacity))",
                  display: "block",
                  "--tw-text-opacity": 1,
                }}
              >
                Trade
              </Button>
            </NavLink>
          </Box>
          <ConnectButtonCustom />
          <Box sx={{ flexGrow: 0 }}>
            <Menu> </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
