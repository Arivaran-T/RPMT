import {
  Paper,
  Box,
  Grid,
  Typography,
  TextField,
  FormControl,
  Divider,
  Container,
  List,
  Collapse,
  Button,
  Skeleton,
} from "@mui/material";
import Heading from "../../../Components/Heading";
import { makeStyles } from "@mui/styles";
import RMTbtn from "../../../Components/RMTbtn";
import Members from "../Util/Members";
import { TransitionGroup } from "react-transition-group";

//react
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Alert from "../../../Components/Alert";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const useStyle = makeStyles({
  inputs: {
    color: "#99ccff",
    background: "rgb(6, 74, 130)",
    borderRadius: "5px",
    fontFamily: "arial",
    fontWeight: "600",
    letterSpacing: ".5px",
  },
});

function OwnGroup() {
  //hooks
  const classes = useStyle();

  //url
  const URL = "http://localhost:5000/api/v1/";

  //state
  const [hasGroup, setHasGroup] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  //group data
  const [grpName, setGrpName] = useState("");
  const [field, setgField] = useState("");
  const [topic, setgTopic] = useState("");
  const [leader, setLeader] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [coSupervisor, setCoSupervisor] = useState("");
  const [requestedSupervisor, setRSupervisor] = useState(false);
  const [requestedCoSupervisor, setRCoSupervisor] = useState(false);
  const [members, setMembers] = useState([]);

  //user data
  const { token, userID } = useSelector((state) => state.loging);

  //useEffect call
  useEffect(() => {
    axios
      .get(`${URL}groups/users/${userID}`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          setLoaded(true);
          setHasGroup(true);
          setGrpName(res.data.data.name);
          setgField(res.data.data.research_Field);
          setgTopic(res.data.data.research_Topic.name);
          setLeader(res.data.data.leader.name);
          setMembers(res.data.data.members);
          setSupervisor(
            res.data.data.supervisor && res.data.data.supervisor.name
          );
          setCoSupervisor(
            res.data.data.coSupervisor && res.data.data.coSupervisor.name
          );
          setRSupervisor(
            res.data.data.requested && res.data.data.requested.supervisor
              ? true
              : false
          );
          setRSupervisor(
            res.data.data.requested && res.data.data.requested.coSupervisor
              ? true
              : false
          );
        } else {
          setHasGroup(false);
          setLoaded(true);
        }
      })
      .catch((er) => {
        console.log(er);
        setLoaded(true);
        setHasGroup(false);
      });
  }, []);

  //create group
  const addgroup = () => {
    //validation
    if (!research_Field.trim() || !research_Topic.trim() || !name.trim()) {
      return setError("All fields are required");
    }

    const data = { research_Field, research_Topic, name };
    axios
      .post(`${URL}groups/${userID}`, data)
      .then((res) => {
        if (res.data.added) {
          window.location.reload();
        }
      })
      .catch((er) => {
        toast("Unabele to create a group,try again", { type: "error" });
      });
  };

  //new group data
  const [name, setname] = useState("");
  const [research_Field, setField] = useState("");
  const [research_Topic, setTopic] = useState("");

  //error state
  const [error, setError] = useState("");

  return (
    <>
      <ToastContainer />
      <Alert
        open={!!error}
        msg={error}
        title={"Alert!"}
        handleClose={() => {
          setError("");
        }}
      />
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{
            bgcolor: "#073050",
            borderRadius: "3px",
            textAlign: "center",
          }}
          minHeight={"73vh"}
        >
          {isLoaded && hasGroup && (
            <>
              <Heading heading="Research Group" />
              <Box my={2} />
              <Grid container justifyContent={"start"} alignItems="center">
                <Grid item xs={4}>
                  <Typography
                    variant="h4"
                    textAlign={"left"}
                    sx={{ color: "#fff" }}
                  >
                    Group Name
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <FormControl fullWidth>
                    <TextField
                      disabled
                      value={grpName}
                      onChange={(event) => {
                        setGrpName(event.target.value);
                      }}
                      color="info"
                      variant="outlined"
                      margin="none"
                      size="small"
                      className={classes.inputs}
                      inputProps={{ className: classes.inputs }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box my={2} />
              <Grid container justifyContent={"start"} alignItems="center">
                <Grid item xs={4}>
                  <Typography
                    variant="h4"
                    textAlign={"left"}
                    sx={{ color: "#fff" }}
                  >
                    Research Field
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <FormControl fullWidth>
                    <TextField
                      disabled
                      value={field}
                      onChange={(event) => {
                        setgField(event.target.value);
                      }}
                      color="info"
                      variant="outlined"
                      margin="none"
                      size="small"
                      className={classes.inputs}
                      inputProps={{ className: classes.inputs }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box my={2} />
              <Grid container justifyContent={"start"} alignItems="center">
                <Grid item xs={4}>
                  <Typography
                    variant="h4"
                    textAlign={"left"}
                    sx={{ color: "#fff" }}
                  >
                    Research Topic
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <FormControl fullWidth>
                    <TextField
                      disabled
                      color="info"
                      value={topic}
                      onChange={(event) => {
                        setgTopic(event.target.value);
                      }}
                      variant="outlined"
                      margin="none"
                      size="small"
                      className={classes.inputs}
                      inputProps={{ className: classes.inputs }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box my={2} />
              <Grid container justifyContent={"start"} alignItems="center">
                <Grid item xs={4}>
                  <Typography
                    variant="h4"
                    textAlign={"left"}
                    sx={{ color: "#fff" }}
                  >
                    Leader Name
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <FormControl fullWidth>
                    <TextField
                      disabled
                      value={leader}
                      onChange={(event) => {
                        setLeader(event.target.value);
                      }}
                      color="info"
                      variant="outlined"
                      margin="none"
                      size="small"
                      className={classes.inputs}
                      inputProps={{ className: classes.inputs }}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Box my={2} />
              <Grid container justifyContent={"start"} alignItems="center">
                <Grid item xs={4}></Grid>
                <Grid item xs={8}>
                  {/* <FormControl fullWidth>
                    <RMTbtn btn="save changes" handler={() => {}} wd="100%" />
                  </FormControl> */}
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 2 }} />
              <Grid container justifyContent={"start"} alignItems="center">
                <Grid item xs={4}>
                  <Typography
                    variant="h4"
                    textAlign={"left"}
                    sx={{ color: "#fff" }}
                  >
                    Supervisor
                  </Typography>
                </Grid>
                <Grid item xs={8} sx={{ textAlign: "left", my: 2 }}>
                  {!requestedSupervisor ? (
                    <RMTbtn
                      href="/profile/supervisor"
                      btn="Request for Supervisor"
                      handler={() => {}}
                      wd="100%"
                    />
                  ) : supervisor ? (
                    <Typography variant="h4" sx={{ color: "#888" }}>
                      {supervisor}
                    </Typography>
                  ) : (
                    <Typography variant="h4" sx={{ color: "#888" }}>
                      requested
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Grid container justifyContent={"start"} alignItems="center">
                <Grid item xs={4}>
                  <Typography
                    variant="h4"
                    textAlign={"left"}
                    sx={{ color: "#fff" }}
                  >
                    Co-Supervisor
                  </Typography>
                </Grid>
                <Grid item xs={8} sx={{ textAlign: "left" }}>
                  {!requestedCoSupervisor ? (
                    <RMTbtn
                      href="/profile/co-supervisor"
                      btn="Request for Co-Supervisor"
                      handler={() => {}}
                      wd="100%"
                    />
                  ) : coSupervisor ? (
                    <Typography variant="h4" sx={{ color: "#fff" }}>
                      {coSupervisor}
                    </Typography>
                  ) : (
                    <Typography variant="h4" sx={{ color: "#fff" }}>
                      Requested
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 3 }} />
              <Container maxWidth="sm">
                <Heading heading="Group Members" />
                <Container maxWidth="xs">
                  <List>
                    <TransitionGroup>
                      {members ? (
                        members.map((row, index) => {
                          return (
                            <Collapse>
                              <Members key={index} data={row} />
                            </Collapse>
                          );
                        })
                      ) : (
                        <>No Members</>
                      )}
                    </TransitionGroup>
                  </List>
                </Container>
              </Container>
            </>
          )}
          {!hasGroup && isLoaded && (
            <>
              <Container maxWidth="sm">
                <TextField
                  fullWidth
                  value={name}
                  onChange={(event) => {
                    setname(event.target.value);
                  }}
                  color="info"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  id="group name"
                  label="Group name"
                  className={classes.inputs}
                  autoFocus
                  inputProps={{ className: classes.inputs }}
                />
                <TextField
                  fullWidth
                  value={research_Field}
                  onChange={(event) => {
                    setField(event.target.value);
                  }}
                  color="info"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  id="field"
                  label="Research Field"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                />
                <TextField
                  fullWidth
                  value={research_Topic}
                  onChange={(event) => {
                    setTopic(event.target.value);
                  }}
                  color="info"
                  variant="outlined"
                  margin="normal"
                  size="small"
                  id="topic"
                  label="Research Topic"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                />
              </Container>
              <Button
                onClick={addgroup}
                sx={{ mt: 3 }}
                color="info"
                variant="contained"
                disableElevation
              >
                Create A Group
              </Button>
            </>
          )}
          {!isLoaded && (
            <>
              <Skeleton
                animation="pulse"
                variant="rectangular"
                sx={{ borderRadius: 1, mb: 2 }}
                width={"100%"}
                height={100}
              />
              <Skeleton
                animation="pulse"
                variant="rectangular"
                sx={{ borderRadius: 1 }}
                width={"100%"}
                height={100}
              />
            </>
          )}
        </Box>
      </Paper>
    </>
  );
}

export default OwnGroup;
