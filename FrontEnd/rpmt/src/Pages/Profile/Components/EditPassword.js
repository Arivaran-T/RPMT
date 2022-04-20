import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Heading from "../../../Components/Heading";

function Editpassword() {
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#073050", borderRadius: "3px", textAlign: "center" }}
          minHeight={"73vh"}
        >
          <Heading heading="Edit Details" />
        </Box>
      </Paper>
    </>
  );
}

export default Editpassword;
