import { Avatar, Box, Grid, Paper } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  btn: {
    color: "#fff",
    textDecoration: "none",
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "15px",
  },
});

function Options(props) {
  const { page } = useParams();
  const classes = useStyle();
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#073050", borderRadius: "3px", textAlign: "center" }}
          pb={10}
          height="64vh"
        >
          <Grid mb={6} mt={2} container justifyContent="center">
            <Avatar
              variant="rounded"
              alt="User DP"
              src=""
              sx={{ width: 56, height: 56 }}
            >
              U
            </Avatar>
          </Grid>
          <Btn link="details" title="Profile" />
          <Btn link="research" title="Research" />
          <Btn link="submissions" title="Submission" />
        </Box>
      </Paper>
    </>
  );
}

const Btn = (props) => {
  const classes = useStyle();
  const { page } = useParams();
  const bcolor = page === props.link ? "#094F88" : "#073A63";
  return (
    <>
      <Link className={classes.btn} to={`/profile/${props.link}`}>
        <Box elevation={4} my={2} p={1} py={1.5} sx={{ bgcolor: bcolor, color: "#fff" ,borderRadius:"6px" }}>
          {props.title}
        </Box>
      </Link>
    </>
  );
};

export default Options;
