import { Box, Grid, IconButton, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Confirmation from "../../../Components/Confirmation";

function Members(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      my={1}
      py={0.2}
      px={1.5}
      borderRadius={3}
      border="2px solid #117DD5"
      bgcolor={"#064A82"}
    >
      <Confirmation
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
      <Grid
        container
        direction={"row"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Grid item xs={8}>
          <Typography
            variant="h4"
            textAlign={"left"}
            sx={{ fontFamily: "open sans", fontWeight: "600", color: "#eee" }}
          >
            {props.data.name}
          </Typography>
        </Grid>
        <Grid item xs={2} sx={{ textAlign: "right" }}>
          <IconButton
            color="error"
            onClick={() => {
              handleClickOpen();
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Members;
