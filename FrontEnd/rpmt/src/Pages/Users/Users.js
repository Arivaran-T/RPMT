import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  Pagination,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Header from "../../Components/Header";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";

function Users(props) {
  return (
    <>
      <Header handler={props.handler} />
      <Box component={Paper} elevation={0} square py={2} minHeight={"78vh"}>
        <Container
          maxWidth={"md"}
          sx={{ p: 2 }}
          component={Paper}
          variant={"outlined"}
        >
          <Typography variant="h4" sx={{ color: "#E28743" }}>
            Users of the System
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }} my={2}>
            <TextField
              margin="none"
              fullWidth
              label="Search Users"
              autoFocus
              color="info"
            ></TextField>
            <IconButton
              size="large"
              sx={{
                borderRadius: 1,
                bgcolor: "#E28743",
                "&:hover": { bgcolor: "#1071bc" },
              }}
            >
              <ManageSearchIcon size="large" />
            </IconButton>
          </Box>
          <Divider />
          <Box py={1} mt={3}>
            <UserRow />
            <UserRow />
            <UserRow />
            <UserRow />
          </Box>
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
        </Container>
      </Box>
    </>
  );
}

const UserRow = (props) => {
  return (
    <Box
      component={Paper}
      variant={"outlined"}
      p={1.3}
      mb={1.6}
      sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Avatar
        sx={{ height: 50, width: 50 }}
        src="https://assets.gadgets360cdn.com/pricee/assets/product/202203/BreakingBad-4_1647286045.jpg"
      ></Avatar>
      <Box ml={2}>
        <Typography sx={{ fontSize: 13, color: "#1071bc" }}>
          User name
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#1071bc" }}>
          email@email.com
        </Typography>
        {
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Typography sx={{ fontSize: 13, color: "#1071bc" }}>
              User role
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#1071bc" }}>
              ID20202020
            </Typography>
          </Box>
        }
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Typography sx={{ fontSize: 13, color: "#1071bc" }}>
          User role
        </Typography>
        <Typography sx={{ fontSize: 13, color: "#1071bc" }}>
          ID20202020
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box>
        <Tooltip title="edit">
          <IconButton
            href={`/user/id`}
            sx={{ bgcolor: "#555", mr: 2 }}
            size="large"
          >
            <ModeEditIcon color="success" />
          </IconButton>
        </Tooltip>
        <Tooltip title="delete">
          <IconButton sx={{ bgcolor: "#555" }} size="large">
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
export default Users;
