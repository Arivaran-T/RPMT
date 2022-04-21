import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Heading from "../../../Components/Heading";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import Supervisor from "../Util/Supervisor";

const useStyle = makeStyles({
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

function RequestSupervisor(props) {
  const page = props.page;
  const classes = useStyle();
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#073050", borderRadius: "3px", textAlign: "center" }}
          minHeight={"73vh"}
        >
          <Heading heading={`Request ${page}`} />
          <Container maxWidth="sm">
            <Grid
              container
              justifyContent={"start"}
              alignItems="center"
              spacing={1}
            >
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
              <Grid item xs={4} sx={{textAlign:"right"}}>
                <Button
                  sx={{ bgcolor: "#1383DD", color: "#fff", margin: "0" }}
                  color="secondary"
                  onClick={() => {}}
                  className={classes.btn}
                  endIcon={<SearchIcon Size="small" />}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "open sans", fontWeight: "600" }}
                  >
                    Search
                  </Typography>
                </Button>
              </Grid>
            </Grid>
            <Typography
              variant="subtitle2"
              sx={{ color: "#fff" }}
              textAlign={"left"}
            >
              You can only request to one
            </Typography>
            <Divider sx={{marginTop:2}}/>
            <Box my={5} />
            <Container maxWidth="xs">
              <Supervisor />
              <Supervisor />
              <Supervisor />
            </Container>
          </Container>
        </Box>
      </Paper>
    </>
  );
}

export default RequestSupervisor;
