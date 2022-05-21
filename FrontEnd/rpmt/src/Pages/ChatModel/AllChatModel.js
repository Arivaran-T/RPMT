import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import GroupChatModel from "./GroupChatModel";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Tooltip,
  Link,
  Grid,
} from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import ChatMsg from "./ChatMsg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#555",
  color: "white",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 1,
  px: 0,
  pb: 1,
};
function AllChatModel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={"Chat"}>
        <IconButton onClick={handleOpen} size="large" color="inherit">
          <Badge badgeContent={1} color="error">
            <MessageIcon fontSize="inherit" />
          </Badge>
        </IconButton>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          {/* <h2 id="parent-modal-title">All Chats</h2> */}
          <Grid
            sx={{
              backgroundColor: "#555",
            }}
            item
            display={{ xs: "none", sm: "block" }}
            xs={0}
            sm={3}
            lg={2}
          >
            <GroupChatModel />
            <GroupChatModel />
            <GroupChatModel />
            <GroupChatModel />
            <GroupChatModel />
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default AllChatModel;
