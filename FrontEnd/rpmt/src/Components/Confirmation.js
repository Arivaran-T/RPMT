import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import * as React from "react";

function Confirmation(props) {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
      >
        <DialogTitle>{"Remove member?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you Want to Remove
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Yes</Button>
          <Button onClick={props.handleClose}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Confirmation;
