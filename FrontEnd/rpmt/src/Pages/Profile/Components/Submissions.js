import { Box, Paper } from "@mui/material";
import Heading from "../../../Components/Heading";
import SingleSubmission from "../Util/Submission";

function Submission() {
  return (
    <>
      <Paper elevation={4}>
        <Box
          p={2}
          sx={{ bgcolor: "#073050", borderRadius: "3px", textAlign: "center" }}
          minHeight={"73vh"}
        >
          <Heading heading={`Submissions`} />
          <SingleSubmission/>
          <SingleSubmission/>
        </Box>
      </Paper>
    </>
  );
}

export default Submission;
