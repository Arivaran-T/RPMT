import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";

function Groups() {
  return (
    <>
      <Box minHeight={"72vh"} component={Paper} elevation={1} p={3}>
        <Grid
          container
          alignItems="center"
          justifyContent={"center"}
          spacing={1}
        >
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
        </Grid>
      </Box>
    </>
  );
}

const Group = () => {
  const navigate = useNavigate();
  return (
    <Grid
      component={Paper}
      variant="outlined"
      item
      onClick={() => {
        navigate("/research/grp/id");
      }}
      //   xs={3}
      sx={{
        p: 2,
        m: 2,
        cursor: "pointer",
        "&:hover": { bgcolor: "#333" },
        minWidth: 300,
      }}
    >
      <Box>
        <Typography sx={{ color: "#1071bc", fontSize: 18 }}>
          Group Name
        </Typography>
        <Typography sx={{ color: "#888", fontSize: 14 }}>
          Research Topic
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: 13 }}>
          Supervisor : <span style={{ color: "#E28743" }}>supervisor name</span>
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: 13 }}>
          Co-Supervisor :{" "}
          <span style={{ color: "#E28743" }}>Co-supervisor name</span>
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: 13 }}>
          Student Count : <span style={{ color: "#E28743" }}>Count</span>
        </Typography>
        {true && (
          <Button sx={{textTransform:"none",mt:1}} variant="outlined" disabled color="success" startIcon={<BookmarkAddedIcon />}>
            Topic Accepted
          </Button>
        )}
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Grid>
  );
};
export default Groups;
