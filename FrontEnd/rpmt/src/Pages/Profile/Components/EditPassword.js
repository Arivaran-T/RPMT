import {
  Container,
  Paper,
  TextField,
  Box,
  FormControl,
  Typography,
  InputAdornment,
} from "@mui/material";
import Heading from "../../../Components/Heading";
import { makeStyles } from "@mui/styles";
import RMTbtn from "../../../Components/RMTbtn";

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

function Editpassword() {
  const classes = useStyle();
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#073050", borderRadius: "3px", textAlign: "center" }}
          minHeight={"73vh"}
        >
          <Heading heading="Edit Password" />
          <Container maxWidth="xs">
            <Box mt={5}>
              <FormControl fullWidth>
                <Typography className={classes.lables}>Old Password</Typography>
                <TextField
                  type={"password"}
                  color="info"
                  variant="outlined"
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "20px" }}
                />
                <Typography className={classes.lables}>New Password</Typography>
                <TextField
                  type={"password"}
                  color="info"
                  variant="outlined"
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "20px" }}
                />
                <Typography className={classes.lables}>
                  Repeat Password
                </Typography>
                <TextField
                  type={"password"}
                  color="info"
                  variant="outlined"
                  margin="none"
                  size="small"
                  className={classes.inputs}
                  inputProps={{ className: classes.inputs }}
                  sx={{ marginBottom: "20px" }}
                />
                <RMTbtn btn="SAVE Password" handler={() => {}} wd="100%" />
              </FormControl>
            </Box>
          </Container>
        </Box>
      </Paper>
    </>
  );
}

export default Editpassword;
