import {
  Box,
  Container,
  FormControl,
  Grid,
  IconButton,
  Pagination,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../Components/Header";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function Groups(props) {
  return (
    <>
      <Header handler={props.handler} />
      <Box component={Paper} square elevation={0} minHeight="80vh" py={2}>
        <Container maxWidth="sm">
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              autoFocus
              size="small"
              color="success"
              margin="none"
              fullWidth
              label="Group name"
            />
            <IconButton
              sx={{
                bgcolor: "#fff",
                borderRadius: 0.5,
                "&:hover": { bgcolor: "#E28743" },
              }}
            >
              <SearchIcon sx={{ color: "#333" }} />
            </IconButton>
          </Box>
        </Container>
        <Container maxWidth="md">
          <Box mt={3} p={2} component={Paper} variant="outlined">
            <Grid
              container
              direction={"row"}
              justifyContent="center"
              alignItems={"stretch"}
              spacing={4}
              minHeight="50vh"
            >
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
              <Group />
            </Grid>
            <Box
              my={3}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Pagination
                color="standard"
                count={4}
                variant="outlined"
                shape="rounded"
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const Group = () => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{ cursor: "pointer" }}
        component={Paper}
        elevation={2}
        p={2}
        onClick={() => {
          navigate("/groups/id");
        }}
      >
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
      </Box>
    </Grid>
  );
};
export default Groups;
