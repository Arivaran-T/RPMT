import {
  Box,
  Container,
  Grid,
  IconButton,
  Pagination,
  Paper,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../Components/Header";
import SearchIcon from "@mui/icons-material/Search";

//react
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Groups(props) {
  //user data
  const { userID, token } = useSelector((state) => state.loging);

  //url
  const URL = "http://localhost:5000/api/v1/";

  //state
  const [isLoaded, setLoaded] = useState(false);
  const [groups, setGroups] = useState([]);

  //useEffect call
  useEffect(() => {
    axios
      .get(`${URL}groups`)
      .then((res) => {
        setLoaded(true);
        if (res.data) {
          setGroups(res.data);
        }
      })
      .catch((er) => {
        setLoaded(true);
      });
  }, []);

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
              minHeight="25vh"
            >
              {isLoaded ? (
                groups.length > 0 &&
                groups.map((row, index) => {
                  return <Group key={index} data={row} />;
                })
              ) : (
                <>
                  <GroupSkelton />
                  <GroupSkelton />
                  <GroupSkelton />
                </>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
const GroupSkelton = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Skeleton
        animation="pulse"
        variant="rectangular"
        sx={{ borderRadius: 1, mb: 2 }}
        width={"100%"}
        height={"100%"}
      />
    </Grid>
  );
};
const Group = (props) => {
  const navigate = useNavigate();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{ cursor: "pointer" }}
        component={Paper}
        elevation={2}
        p={2}
        onClick={() => {
          navigate("/groups/" + props.data._id);
        }}
      >
        <Typography sx={{ color: "#1071bc", fontSize: 18 }}>
          {props.data.name}
        </Typography>
        <Typography sx={{ color: "#888", fontSize: 14 }}>
          {props.data.research_Topic.name}
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: 13 }}>
          Supervisor :{" "}
          <span style={{ color: "#E28743" }}>
            {props.data.supervisor ? props.data.supervisor.name : "N/A"}
          </span>
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: 13 }}>
          Co-Supervisor :{" "}
          <span style={{ color: "#E28743" }}>
            {props.data.coSupervisor ? props.data.coSupervisor.name : "N/A"}
          </span>
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: 13 }}>
          Student Count :{" "}
          <span style={{ color: "#E28743" }}>{props.data.members.length}</span>
        </Typography>
      </Box>
    </Grid>
  );
};
export default Groups;
