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
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//others
import RMTbtn from "../../../Components/RMTbtn";
import Heading from "../../../Components/Heading";
import { grey, red } from "@mui/material/colors";
import Alert from "../../../Components/Alert";
import ImageModal from "../Util/ImageModel";

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
  //hooks
  const classes = useStyle();

  //state
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);

  //handlers
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //user data
  const { token, userID, role } = useSelector((State) => State.loging);
  const [name, setname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [id, setID] = useState("");
  const [contact, setContact] = useState("");
  const [NIC, setNIC] = useState("");
  const [DOB, setDOB] = useState();
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  const [dp, setDp] = useState("");

  //error state
  const [error, setError] = useState("");

  //url
  const URL = "http://localhost:5000/api/v1/";

  //useEffect
  useEffect(() => {
    axios
      .get(`${URL}users/${userID}`)
      .then((res) => {
        const data = res.data;
        if (data) {
          setname(data.name);
          setAddress(data.address);
          setEmail(data.email);
          setContact(data.mobile_number);
          setNIC(data.NIC);
          setGender(data.gender);
          setBio(data.bio);
          setDp(data.dp);
          setDOB(data.DOB);
        }
      })
      .catch((er) => {});
  }, []);

  //update details
  const submit = () => {
    if (!name.trim()) {
      return setError("valid name required");
    }
    if (
      !contact.toString().trim() ||
      contact.length > 10 ||
      contact.length < 9
    ) {
      return setError("valid contact number required");
    }
    if (!NIC.trim() || NIC.length < 10) {
      return setError("require valid NIC");
    }

    const data = { name, mobile_number: contact, NIC, bio, address, DOB };

    axios
      .put(`${URL}users/${userID}`, data, {
        headers: { Authorization: "Agriuservalidation " + token },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((er) => {
        toast("Unable to update, try again", { type: "error" });
      });
  };

  return (
    <>
      <Alert
        open={!!error}
        msg={error}
        title={"Alert!"}
        handleClose={() => {
          setError("");
        }}
      />
      <ToastContainer />
      <ImageModal
        userID={userID}
        token={token}
        open={open}
        handleClose={handleClose}
      />
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
              src={dp}
              sx={{ height: "70px", width: "70px", bgcolor: "#fff" }}
            />
          </Badge>
          <br />
          <Container maxWidth="sm">
            <Box mt={5}>
              <FormControl fullWidth>
                <Typography className={classes.lables}>Name*</Typography>
                <TextField
                  color="info"
                  variant="outlined"
                  value={name}
                  onChange={(event) => {
                    setname(event.target.value);
                  }}
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
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "13px" }}
                />
                <Typography className={classes.lables}>Contact No*</Typography>
                <TextField
                  color="info"
                  variant="outlined"
                  value={contact}
                  onChange={(event) => {
                    setContact(event.target.value);
                  }}
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "13px" }}
                />
                <Typography className={classes.lables}>NIC*</Typography>
                <TextField
                  color="info"
                  variant="outlined"
                  value={NIC}
                  onChange={(event) => {
                    setNIC(event.target.value);
                  }}
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
                    disableFuture
                    inputProps={{ className: classes.inputs }}
                    value={DOB}
                    onChange={(newValue) => {
                      setDOB(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        color="info"
                        variant="outlined"
                        value={DOB}
                        onChange={(event) => {
                          setDOB(event.target.value);
                          console.log(event.target.value);
                        }}
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
                  value={bio}
                  onChange={(event) => {
                    setBio(event.target.value);
                  }}
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "13px" }}
                />
                <RMTbtn wd="100%" btn="Save Changes" handler={submit} />
              </FormControl>
              <Box mt={5} />
              <Divider />
              <Rowdata title="Email Id" data={email} />
              <Rowdata title="Student Id" data={id} />
              <Rowdata title="Gender" data={gender} />
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
