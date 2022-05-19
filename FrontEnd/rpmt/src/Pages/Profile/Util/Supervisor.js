import { Box, Button, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const useStyle = makeStyles({
  btn: {
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
});

function Supervisor(props) {
  //grp id
  const grp_id = props.grp;
  const page = props.page;

  //hook
  const navigate = useNavigate();

  const classes = useStyle();

  //url
  const URL = "http://localhost:5000/api/v1/";

  const request = () => {
    axios
      .put(`${URL}groups/${grp_id}/${page}/${props.data._id}`)
      .then((res) => {
        if (res.data.requested) {
          navigate("/profile/group", { replace: true });
        }
      })
      .catch((er) => {
        toast("Unable to send request try again", { type: "error" });
      });
  };

  return (
    <Box my={2} bgcolor="#064A82" borderRadius={2}>
      <ToastContainer />
      <Grid container justifyContent={"space-between"} alignItems="center">
        <Grid item>
          <Typography variant="h4" sx={{ color: "#fff", paddingLeft: 2 }}>
            {props.data.name}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{ bgcolor: "#1383DD", color: "#fff", margin: "0" }}
            color="secondary"
            onClick={request}
            className={classes.btn}
          >
            request
            {/* <Typography
              variant="h4"
              sx={{ fontFamily: "open sans", fontWeight: "600" }}
            >
              request
            </Typography> */}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Supervisor;
