import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  Button,
  Link,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MailIcon from "@mui/icons-material/Mail";

import logo from "../Assets/logo.png";

function Header(props) {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mode, setMode] = useState("light");

  const handleClose = () => {
    setAnchorEl(null);
  };

  props.handler(mode);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={"primary"} position="sticky">
        <Toolbar>
          <img alt="dd" src={logo} width="100px" />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
            onClick={() => {
              setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
              props.handler(mode);
            }}
          >
            {mode === "light" ? (
              <DarkModeIcon fontSize="inherit" />
            ) : (
              <LightModeIcon fontSize="inherit" />
            )}
          </IconButton>

          {!auth && (
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
              <Link href="/auth/sign-in">
                <Button key={"login"} color="secondary">
                  Log In
                </Button>
              </Link>
              <Button key={"login"} color="secondary">
                Sign up
              </Button>
            </Box>
          )}

          {/*user profile*/}
          {auth && (
            <div>
              <IconButton size="large" color="inherit">
                <Badge badgeContent={1} color="error">
                  <MailIcon fontSize="inherit" />
                </Badge>
              </IconButton>
              <Tooltip title="profile">
                <IconButton size="large" onClick={handleMenu} color="inherit">
                  <AccountCircle fontSize="inherit" />
                </IconButton>
              </Tooltip>
              <Menu
                color="#e28743"
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem
                  onClick={() => {
                    setAuth(false);
                  }}
                >
                  Log Out
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
