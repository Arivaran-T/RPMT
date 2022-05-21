import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {
  Avatar,
  Toolbar,
  Stack,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ChatMsg from "./ChatMsg";
import TopicIcon from "@mui/icons-material/Topic";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   bgcolor: "#073A63",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 0,
  px: 0,
  pb: 0,
};

function GroupChatModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            sx={{ width: 40, height: 40 }}
            alt=""
            src="/static/images/avatar/1.jpg"
          >
            GN
          </Avatar>
        </Box>

        <IconButton color="error" size="large" onClick={handleClose}>
          <CloseIcon color="error" fontSize="large" />
        </IconButton>
      </Toolbar>
    );
  };

  const Bottom = () => {
    return (
      <Toolbar
        p={0}
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
        <IconButton size="medium">
          <SendIcon size="large" color="info" />
        </IconButton>
      </Toolbar>
    );
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>
        <Box
          sx={{
            cursor: "pointer",
            backgroundColor: "#05243C",
            boxShadow: "0px 1px 2px 0px #333",
            borderRadius: 2,
            width: 485,
          }}
          m={0}
          py={1}
          style={{ direction: "ltr" }}
        >
          <Toolbar>
            <Avatar
              sx={{ width: 50, height: 50 }}
              alt="User image"
              src="/static/images/avatar/1.jpg"
            >
              GN
            </Avatar>
            <Box sx={{ flexGrow: 0.4 }} ml={2.5} />
            <Stack direction="column" spacing={1}>
              <Typography
                noWrap
                fontFamily={"open sans"}
                fontWeight={"700"}
                color={"#DFDADA"}
                //   variant="h4"
              >
                Group Name
              </Typography>
              <Typography
                fontFamily={"Amaranth"}
                fontWeight={"500"}
                color={"#8D8C8C"}
              >
                18/05/2022 21:00
              </Typography>
            </Stack>
          </Toolbar>
        </Box>
      </Button>

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 700 }}>
          {/* <h2 id="child-modal-title">Group Name</h2> */}
          <TopBar />
          <Box
            sx={{
              height: "76.8%",
              backgroundColor: "#073050",
              overflow: "auto",
            }}
          >
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
          </Box>
          <Box sx={{ height: "12%", backgroundColor: "grey" }}>
            <Bottom />
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default GroupChatModel;
