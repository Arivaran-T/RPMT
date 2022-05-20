import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import Heading from "../../../Components/Heading";
import { makeStyles } from "@mui/styles";
import RMTbtn from "../../../Components/RMTbtn";
import RPMAccordion from "../Util/RPMAccordion";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

//react
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyle = makeStyles({
  lables: {
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: "13px",
    color: "#ddd",
    marginBottom: "5px",
  },
  inputs: {
    color: "#99ccff",
    background: "rgb(6, 74, 130)",
    borderRadius: "5px",
    fontFamily: "arial",
    fontWeight: "600",
    letterSpacing: ".5px",
  },
});

function Research() {
  //hook
  const classes = useStyle();

  //url
  const URL = "http://localhost:5000/api/v1/";

  //user data
  const { token, userID, role } = useSelector((state) => state.loging);

  //state
  const [status, setStatus] = useState(null);
  const [isLoaded, setLoaded] = useState(false);

  //useEffect
  useEffect(() => {
    axios
      .get(`${URL}users/${userID}`)
      .then((res) => {
        if (res.data.group_id) {
          axios
            .get(`${URL}groups/topics/${res.data.group_id}`)
            .then((res) => {
              setStatus(res.data.status);
              setLoaded(true);
            })
            .catch((er) => {
              setLoaded(true);
            });
        } else {
          setLoaded(true);
          setStatus(null);
        }
      })
      .catch((er) => {
        setLoaded(true);
      });

    //get requests
  }, []);

  return (
    <>
      <ToastContainer />
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{
            bgcolor: "#073050",
            borderRadius: "3px",
            textAlign: "center",
          }}
          minHeight={"77vh"}
        >
          {isLoaded ? (
            <>
              <Heading heading="Research" />
              {status === "rejected" && (
                <Box my={3}>
                  <Grid
                    container
                    direction="row"
                    justifyContent={"start"}
                    alignItems="center"
                  >
                    <Grid item xs={5} sm={3}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: "open sans",
                          color: "#eee",
                          textAlign: "left",
                        }}
                      >
                        Your Research Field
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          margin="none"
                          fullWidth
                          variant="outlined"
                          color="info"
                          size="small"
                          className={classes.inputs}
                          inputProps={{ className: classes.inputs }}
                        />
                      </FormControl>
                    </Grid>
                    <Grid xs={5} display={{ xs: "block", sm: "none" }}></Grid>
                    <Grid item xs={7} sm={3}>
                      <RMTbtn btn="Update" handler={() => {}} wd="95%" />
                    </Grid>
                  </Grid>
                </Box>
              )}
              <Divider />
              {status !== null && <RPMAccordion />}
              {status === null && (
                <Box my={2} px={2} sx={{ bgcolor: "#0C4D82" }} borderRadius={3}>
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems="center"
                  >
                    <Grid>
                      <Typography variant="h4" sx={{ color: "#fff" }}>
                        Request for Group
                      </Typography>
                    </Grid>
                    <Grid>
                      <IconButton href="/profile/own-group">
                        <ArrowRightIcon color="info" fontSize="large" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              )}
              <Box my={2} px={2} sx={{ bgcolor: "#0C4D82" }} borderRadius={3}>
                <Grid
                  container
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  <Grid>
                    <Typography variant="h4" sx={{ color: "#fff" }}>
                      Your group
                    </Typography>
                  </Grid>
                  <Grid>
                    <IconButton href="/profile/group">
                      <ArrowRightIcon color="info" fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </>
          ) : (
            <>
              <Skeleton
                animation="pulse"
                variant="rectangular"
                sx={{ borderRadius: 1, mb: 2 }}
                width={"100%"}
                height={70}
              />
              <Skeleton
                animation="pulse"
                variant="rectangular"
                sx={{ borderRadius: 1, mb: 2 }}
                width={"100%"}
                height={70}
              />
            </>
          )}
        </Box>
      </Paper>
    </>
  );
}

export default Research;
