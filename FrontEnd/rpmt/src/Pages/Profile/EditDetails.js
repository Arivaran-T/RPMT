import { Paper, Box } from "@mui/material";
import Heading from "./Heading";

function EditDetails() {
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#073050", borderRadius: "3px", textAlign: "center" }}
          minHeight={"77vh"}
        >
          <Heading heading="Edit Details" />
        </Box>
      </Paper>
    </>
  );
}

export default EditDetails;
