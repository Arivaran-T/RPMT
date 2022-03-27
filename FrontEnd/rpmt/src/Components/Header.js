import { useState } from "react";
import {
  Box,
  AppBar,
  Paper,
  Container,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import MailIcon from "@mui/icons-material/Mail";
import logo from "../Assets/logo.png";

function Header() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={"primary"} position="sticky">
        <Toolbar>
          <img alt="dd" src={logo} width="100px" />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
          >
            <DarkModeIcon onClick={() => {}} fontSize="inherit" />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={1} color="error">
              <MailIcon fontSize="inherit" />
            </Badge>
          </IconButton>

          {/*user profile*/}
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="inherit" />
              </IconButton>
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
                <MenuItem onClick={()=>{setAuth(false)}}>Log Out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Paper square={true}>
        <Container></Container>
      </Paper>
    </Box>
  );
}

export default Header;
