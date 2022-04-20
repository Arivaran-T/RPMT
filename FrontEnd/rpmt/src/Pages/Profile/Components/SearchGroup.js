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
import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import Heading from "../../../Components/Heading";
import SearchIcon from "@mui/icons-material/Search";
import UserData from "../Util/UserData";

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

function SearchGroup() {
  const classes = useStyle();
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#073050", borderRadius: "3px", textAlign: "center" }}
          minHeight={"77vh"}
        >
          <Heading heading="Requesting fro Group" />
          <Box my={0.5}>
            <Grid
              container
              direction="column"
              //   justifyContent={"end"}
              alignItems="end"
            >
              <Grid item xs={12}>
                <label htmlFor="name" className={classes.labels}>
                  Search By Name
                </label>
                <Checkbox
                  id="name"
                  //   checked
                  onChange={() => {}}
                  defaultChecked
                  sx={{
                    color: blue[800],
                    "&.Mui-checked": {
                      color: blue[600],
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="area" className={classes.labels}>
                  Search By Research Area
                </label>
                <Checkbox
                  id="area"
                  //   checked
                  onChange={() => {}}
                  defaultChecked
                  sx={{
                    color: blue[800],
                    "&.Mui-checked": {
                      color: blue[600],
                    },
                  }}
                />
              </Grid>
            </Grid>
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
              <Box mt={4}/>
              <UserData/>
              <UserData/>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export default SearchGroup;
