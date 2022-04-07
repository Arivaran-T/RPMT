import {
  Toolbar,
  Avatar,
  Box,
  IconButton,
  Grid,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TopicIcon from "@mui/icons-material/Topic";
import SendIcon from "@mui/icons-material/Send";

//react
import { useState } from "react";
import { borderRadius } from "@mui/system";

function ChatBox() {
  const [isOpen, setOpen] = useState(false);

  const TopBar = () => {
    return (
      <Toolbar
        p={0}
        m={0}
        sx={{
          backgroundColor: "#073A63",
          boxShadow: "0px 1px 1px 0px #222",
        }}
      >
        <Box display={{ xs: "none", sm: "block" }}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            alt=""
            src="/static/images/avatar/1.jpg"
          >
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
              <CloseIcon color="#073050" fontSize="medium" />
            ) : (
              <MenuIcon color="#073050" fontSize="medium" />
            )}
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 1 }} ml={1} />
        <Box mx={2}>
          <IconButton size="medium">
            <SearchIcon color="#073050" fontSize="medium" />
          </IconButton>
        </Box>

        <IconButton color="error" size="medium">
          <DeleteIcon color="error" fontSize="medium" />
        </IconButton>
      </Toolbar>
    );
  };

  return (
    <>
      <TopBar />
      {/* <Box height={500} sx={{ backgroundColor: "red" }} p={0} m={0}> */}
      <Grid sx={{ height: "88.5%" }} container direction="column">
        <Box sx={{ flexGrow: 1 }}>
          <Grid item xs={11}></Grid>
        </Box>

        <Grid item xs={1}>
          <Toolbar p={0}
            sx={{
              backgroundColor: "#073A63",
            }}
          >
            <IconButton color="info" size="large">
              <TopicIcon color="info" fontSize="large" />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} ml={1} />
            <TextField
              fullWidth
              variant="outlined"
              color="info"
              size="small"
              margin="none"
              sx={{ backgroundColor: "#0A4C81", borderRadius: 1 }}
            ></TextField>
            <IconButton size="medium" >
              <SendIcon size="large" color="info"/>
            </IconButton>
          </Toolbar>
        </Grid>
      </Grid>
      {/* </Box> */}
    </>
  );
}

export default ChatBox;
