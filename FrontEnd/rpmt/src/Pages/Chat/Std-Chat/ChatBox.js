import {
  Toolbar,
  Avatar,
  Box,
  IconButton,
  BottomNavigation,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TopicIcon from "@mui/icons-material/Topic";

//react
import { useState } from "react";

function ChatBox() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Toolbar
        sx={{
          backgroundColor: "#073A63",
          boxShadow: "0px 1px 1px 0px #222",
        }}
      >
        <Box display={{ xs: "none", sm: "block" }}>
          <Avatar alt="" src="/static/images/avatar/1.jpg">
            U
          </Avatar>
        </Box>
        <Box display={{ xs: "block", sm: "none" }}>
          <IconButton
            onClick={() => {
              setOpen((pre) => !pre);
            }}
          >
            {isOpen ? (
              <CloseIcon color="info" fontSize="large" />
            ) : (
              <MenuIcon color="info" fontSize="large" />
            )}
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1 }} ml={1} />
        <IconButton color="info" size="large">
          <SearchIcon color="info" fontSize="large" />
        </IconButton>
        <IconButton color="error" size="large">
          <DeleteIcon color="error" fontSize="large" />
        </IconButton>
      </Toolbar>

      <Box height={500}>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Grid item xs={10}>
            fedfd
          </Grid>
          <Grid item xs={2}>
            <Toolbar>
              <IconButton color="info" size="large">
                <TopicIcon color="info" fontSize="large" />
              </IconButton>
            </Toolbar>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ChatBox;
