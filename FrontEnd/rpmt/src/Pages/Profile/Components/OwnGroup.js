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
} from "@mui/material";
import Heading from "../../../Components/Heading";
import { makeStyles } from "@mui/styles";
import RMTbtn from "../../../Components/RMTbtn";
import Members from "../Util/Members";
import { TransitionGroup } from "react-transition-group";

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
  const classes = useStyle();
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#073050", borderRadius: "3px", textAlign: "center" }}
          minHeight={"73vh"}
        >
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
                Leader Name
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <FormControl fullWidth>
                <TextField
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
              <FormControl fullWidth>
                <RMTbtn btn="save changes" handler={() => {}} wd="100%" />
              </FormControl>
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
            <Grid item xs={8} sx={{ textAlign: "left" }}>
              {true ? (
                <RMTbtn
                  btn="Request for Supervisor"
                  handler={() => {}}
                  wd="100%"
                />
              ) : (
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  Supervisor Name
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
              {false ? (
                <RMTbtn
                  btn="Request for Co-Supervisor"
                  handler={() => {}}
                  wd="100%"
                />
              ) : (
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  Co-Supervisor Name
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
                  <Collapse>
                    <Members />
                  </Collapse>
                  <Collapse>
                    <Members />
                  </Collapse>
                  <Collapse>
                    <Members />
                  </Collapse>
                </TransitionGroup>
              </List>
            </Container>
          </Container>
        </Box>
      </Paper>
    </>
  );
}

export default OwnGroup;
