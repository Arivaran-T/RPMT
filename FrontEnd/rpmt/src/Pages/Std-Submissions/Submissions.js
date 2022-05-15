import {
  Paper,
  Box,
  Grid,
  Checkbox,
  Typography,
  TextField,
  Button,
  IconButton,
  FormControl,
} from "@mui/material";
import { Container } from "@mui/material";
import Heading from "../../Components/Heading";
import Header from "../../Components/Header";
import Submission from "./Submission";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  labels: {
    color: "#fff",
    fontFamily: "open sans",
    fontWeight: "700",
    fontSize: 15,
    cursor: "pointer",
  },
  inputs: {
    color: "#99ccff",
    background: "rgb(6, 74, 130)",
    borderRadius: "5px",
    fontFamily: "arial",
    fontWeight: "600",
    letterSpacing: ".5px",
  },
  btn: {
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
});

function AllSubmissions(props) {
  const classes = useStyle();
  return (
    <>
      <Header mode={props.mode} handler={props.handler} />

      <Paper elevation={2} square>
        <Box width="100%" minHeight={"83vh"}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Box py={3}>
              <Paper elevation={3}>
                <Box p={1} sx={{ bgcolor: "#073050", borderRadius: "3px" }}>
                  <Heading heading={`All Submissions`} />
                  <Box mt={2} width="100%">
                    <Grid
                      container
                      direction="row"
                      justifyContent="end"
                      alignItems={"center"}
                      spacing={0.6}
                    >
                      <Grid item xs={9}>
                        <FormControl fullWidth>
                          <TextField
                            fullWidth
                            color="info"
                            variant="outlined"
                            margin="none"
                            size="small"
                            className={classes.inputs}
                            inputProps={{ className: classes.inputs }}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={3}>
                        <Box borderRadius={2} bgcolor="#1074C6">
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                    <Box mt={4} />
                  </Box>

                  <Submission />
                  <Submission />
                  <Submission />
                  <Submission />
                </Box>
              </Paper>
            </Box>
          </Container>
        </Box>
      </Paper>
    </>
  );
}

export default AllSubmissions;
