import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../Components/Header";
function User(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Header handler={props.handler} />
      <Box
        sx={{ flexGrow: 1 }}
        minHeight="78vh"
        component={Paper}
        elevation={0}
        py={2}
        square
      >
        <Container maxWidth="sm">
          <Box
            component={Paper}
            variant={"outlined"}
            p={2}
            mb={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src="https://assets.gadgets360cdn.com/pricee/assets/product/202203/BreakingBad-4_1647286045.jpg"
              sizes="large"
              sx={{ width: { xs: 70, sm: 100 }, height: { xs: 70, sm: 100 } }}
            />
            <Typography variant="h4" sx={{ color: "#1071bc", mt: 1 }}>
              User Name
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#888" }}>
              email@gmail.com
            </Typography>
            <Typography sx={{ fontSize: 13, color: "#888" }}>
              ID20221928
            </Typography>
            <Divider width="100%" sx={{ my: 2 }} />
            <Box width={"90%"}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  margin="normal"
                  color="success"
                  label="User name"
                  autoFocus
                  required
                />
                <TextField
                  fullWidth
                  margin="normal"
                  color="success"
                  label="Contact Number"
                  required
                />
                <TextField
                  fullWidth
                  margin="normal"
                  color="success"
                  label="email"
                  required
                />
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="Role"
                  color="success"
                  // value={"other"}
                  placeholder="Role"
                  // onChange={handleChange}
                >
                  <MenuItem value={"Student"}>Student</MenuItem>
                  <MenuItem value={"Supervisor"}>Supervisor</MenuItem>
                  <MenuItem value={"Co-Supervisor"}>Co-Supervisor</MenuItem>
                  <MenuItem value={"other"}>other</MenuItem>
                </Select>
                <TextField
                  fullWidth
                  margin="normal"
                  color="success"
                  label="password"
                  required
                />
                <Button
                  sx={{
                    color: "#fff",
                    bgcolor: "#1071bc",
                    my: 2,
                    "&:hover": { bgcolor: "#E28743", color: "#333" },
                  }}
                >
                  Save Changes
                </Button>
              </FormControl>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default User;
