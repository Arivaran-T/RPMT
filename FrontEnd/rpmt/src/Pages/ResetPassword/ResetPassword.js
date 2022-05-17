import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../Components/Header";
import { useState } from "react";

function ResetPassword(props) {
  const [stage, setStage] = useState("email");

  return (
    <>
      <Header handler={props.handler} />
      <Box
        sx={{}}
        component={Paper}
        square
        elevation={0}
        minHeight="79vh"
        p={2}
      >
        <Container maxWidth="sm">
          {stage === "email" && <Email setStage={setStage} />}
          {stage === "otp" && <OTP setStage={setStage} />}
          {stage === "password" && <NewPassword />}
        </Container>
      </Box>
    </>
  );
}
const Email = (props) => {
  return (
    <Box component={Paper} variant="outlined" p={2}>
      <Typography sx={{ color: "#1071bc", fontSize: 20 }}>Email</Typography>
      <Typography sx={{ mt: 2, fontWeight: "400" }}>
        Enter Youe email
      </Typography>
      <TextField
        fullWidth
        required
        autoFocus
        sx={{ mt: 2, mb: 4 }}
        size="medium"
        margin="normal"
        color="success"
        label="email address"
      />
      <Button
        onClick={() => {
          props.setStage("otp");
        }}
        sx={{
          width: "100%",
          bgcolor: "#1071bc",
          color: "#fff",
          "&:hover": { bgcolor: "#888" },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};
const OTP = (props) => {
  return (
    <Box component={Paper} variant="outlined" p={2}>
      <Typography sx={{ color: "#1071bc", fontSize: 20 }}>OTP</Typography>
      <Typography sx={{ mt: 2, fontWeight: "400" }}>Enter OTP</Typography>
      <TextField
        fullWidth
        required
        autoFocus
        sx={{ mt: 2, mb: 4 }}
        size="medium"
        margin="normal"
        color="success"
        label="OTP"
        type={"password"}
      />
      <Button
        onClick={() => {
          props.setStage("password");
        }}
        sx={{
          width: "100%",
          bgcolor: "#1071bc",
          color: "#fff",
          "&:hover": { bgcolor: "#888" },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};
const NewPassword = () => {
  return (
    <Box component={Paper} variant="outlined" p={2}>
      <Typography sx={{ color: "#1071bc", fontSize: 20 }}>
        New Password
      </Typography>
      <Typography sx={{ mt: 2, fontWeight: "400" }}>
        Enter new Passsword
      </Typography>
      <TextField
        fullWidth
        required
        autoFocus
        sx={{ mt: 2, mb: 2 }}
        size="medium"
        margin="normal"
        color="success"
        label="New-Password"
        type={"password"}
      />
      <TextField
        fullWidth
        required
        sx={{ mt: 2, mb: 4 }}
        size="medium"
        margin="normal"
        color="success"
        label="Re-Type Password"
        type={"password"}
      />
      <Button
        sx={{
          width: "100%",
          bgcolor: "#1071bc",
          color: "#fff",
          "&:hover": { bgcolor: "#888" },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default ResetPassword;
