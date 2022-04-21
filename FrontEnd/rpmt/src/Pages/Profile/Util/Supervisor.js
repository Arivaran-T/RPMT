import { Box, Button, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  btn: {
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
});

function Supervisor() {
  const classes = useStyle();
  return (
    <Box my={2} bgcolor="#064A82" borderRadius={2}>
      <Grid container justifyContent={"space-between"} alignItems="center">
        <Grid item>
          <Typography variant="h4" sx={{ color: "#fff", paddingLeft: 2 }}>
            Supervisor Name
          </Typography>
        </Grid>
        <Grid item>
          <Button
            sx={{ bgcolor: "#1383DD", color: "#fff", margin: "0" }}
            color="secondary"
            onClick={() => {}}
            className={classes.btn}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "open sans", fontWeight: "600" }}
            >
              request
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Supervisor;
