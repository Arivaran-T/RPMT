//mui
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Paper,
  Box,
  Badge,
  Avatar,
  IconButton,
  FormControl,
  TextField,
  Container,
  Typography,
  Grid,
  Divider,
  Modal,
  Button,
} from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import { makeStyles } from "@mui/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//react
import { useState } from "react";

//others
import RMTbtn from "../../../Components/RMTbtn";
import Heading from "../../../Components/Heading";
import { grey, red } from "@mui/material/colors";
import { width } from "@mui/system";

const useStyle = makeStyles({
  lables: {
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: "13px",
    color: "#ddd",
  },
  inputs: {
    color: "#99ccff",
    background: "rgb(6, 74, 130)",
    borderRadius: "5px",
    fontFamily: "arial",
    fontWeight: "600",
    letterSpacing: ".5px",
  },
  data: {
    fontFamily: "Open Sans",
    fontWeight: "500",
    fontSize: "13px",
    color: "#ccc",
  },
  dpLabel: {
    width: "100%",
    bgcolor: "red",
  },
  btn: {
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
});

const style = {
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 600,
  bgcolor: "#117DD5",
  boxShadow: 24,
  p: 3,
};

function EditDetails() {
  const classes = useStyle();
  const [value, setValue] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={{ textAlign: "center" }} width="100%">
            <label className={classes.dpLabel} htmlFor="image-dp">
              <Avatar
                variant="square"
                sx={{
                  borderRadius: "4px",
                  bgcolor: grey[500],
                  color: "#333",
                  width: 330,
                  height: 330,
                  cursor: "pointer",
                }}
              >
                <CloudUploadIcon
                  sx={{
                    color: "#333",
                    width: 300,
                    height: 300,
                  }}
                />
              </Avatar>
            </label>
            <br />
            <input hidden id="image-dp" type={"file"} />
            <Grid container direction="row" alignItems={"center"} justifyContent="space-between">
              <Grid item >
                <Button
                  alignItems="center"
                  disableElevation
                  sx={{ color: "#fff", fontFamily: "open sans" }}
                  variant="contained"
                  color="secondary"
                  className={classes.btn}
                  endIcon={<UploadIcon fontsize="small" />}
                >
                  Upload
                </Button>
              </Grid>
              <Grid item >
                <Button
                  disableElevation
                  sx={{ color: "#fff", fontFamily: "open sans" }}
                  color="error"
                  endIcon={<DeleteIcon fontsize="small" />}
                  variant="contained"
                  className={classes.btn}
                >
                  Remove
                </Button>
              </Grid>
              <Grid item >
                <Button sx={{ color: red[900],fontFamily: "open sans" }} onClick={handleClose}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#073050", borderRadius: "3px", textAlign: "center" }}
          minHeight={"77vh"}
        >
          <Heading heading="Edit Details" />
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <IconButton
                onClick={() => {
                  handleOpen();
                }}
                sx={{ color: "#1383DD" }}
                size="small"
              >
                <CollectionsIcon size="small" />
              </IconButton>
            }
          >
            <Avatar
              alt="user profile"
              src=""
              sx={{ height: "70px", width: "70px", bgcolor: "#fff" }}
            />
          </Badge>
          <br />
          <Container maxWidth="sm">
            <Box mt={5}>
              <FormControl fullWidth>
                <Typography className={classes.lables}>Name</Typography>
                <TextField
                  color="info"
                  variant="outlined"
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "10px" }}
                />
                <Typography className={classes.lables}>Address</Typography>
                <TextField
                  color="info"
                  variant="outlined"
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "13px" }}
                />
                <Typography className={classes.lables}>Contact No</Typography>
                <TextField
                  color="info"
                  variant="outlined"
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "13px" }}
                />
                <Typography className={classes.lables}>NIC</Typography>
                <TextField
                  color="info"
                  variant="outlined"
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "13px" }}
                />
                <Typography className={classes.lables}>
                  Date of Birth
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    inputProps={{ className: classes.inputs }}
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        color="info"
                        variant="outlined"
                        margin="none"
                        size="small"
                        className={classes.inputs}
                        inputProps={{ className: classes.inputs }}
                        sx={{ marginBottom: "13px" }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>

                <Typography className={classes.lables}>Bio</Typography>
                <TextField
                  multiline
                  maxRows={4}
                  id="outlined-multiline-static"
                  color="info"
                  variant="outlined"
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "13px" }}
                />
                <RMTbtn wd="100%" btn="Save Changes" handler={() => {}} />
              </FormControl>
              <Box mt={5} />
              <Divider />
              <Rowdata title="Email Id" data="nirojan@gamail.com" />
              <Rowdata title="Student Id" data="IT202218928" />
              <Rowdata title="Gender" data="Male" />
              <Box mt={3} />
              <Box sx={{ textAlign: "right" }}>
                <RMTbtn
                  wd="50%"
                  btn="Change Password"
                  href="/profile/change-password"
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Paper>
    </>
  );
}

const Rowdata = (props) => {
  const classes = useStyle();
  return (
    <>
      <Box my={1} sx={{ textAlign: "left" }}>
        <Grid container>
          <Grid item xs={5}>
            <Typography className={classes.data}>{props.title}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography className={classes.data}>{props.data}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
};

export default EditDetails;
