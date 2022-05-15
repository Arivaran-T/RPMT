import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

function Requests() {
  return (
    <>
      <Box minHeight={"72vh"} component={Paper} elevation={1} p={3}>
        <Request />
        <Request />
        <Request />
        <Request />
      </Box>
    </>
  );
}
const Request = () => {
  const navigate = useNavigate();
  return (
    <Grid
      component={Paper}
      variant="outlined"
      container
      sx={{
        p: 2,
        my: 2.5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item>
        <Typography sx={{ color: "#1071bc", fontSize: 20 }}>
          Group Name
        </Typography>
        <Typography sx={{ color: "#888", fontSize: 15 }}>
          Research Topic
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: 15 }}>
          Supervisor : <span style={{ color: "#E28743" }}>supervisor name</span>
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: 15 }}>
          Co-Supervisor :{" "}
          <span style={{ color: "#E28743" }}>Co-supervisor name</span>
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: 15 }}>
          Students :{" "}
          <span style={{ color: "#E28743" }}>[name,name,name,name]</span>
        </Typography>
      </Grid>
      <Box sx={{ flexGrow: 1 }} />
      <Grid item xs={12} sm={2.2}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "column", xs: "row" },
            mt: { xs: 2, sm: 0 },
          }}
        >
          <Button
            variant="contained"
            disableElevation
            color="success"
            sx={{ mb: { sm: 2, xs: 0 }, fontSize: { xs: 12, sm: 15 } }}
            startIcon={<ThumbUpAltIcon />}
          >
            Accept
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            sx={{ fontSize: { xs: 12, sm: 14 } }}
            variant="contained"
            disableElevation
            color="error"
            startIcon={<ThumbDownIcon />}
          >
            Reject
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Requests;
