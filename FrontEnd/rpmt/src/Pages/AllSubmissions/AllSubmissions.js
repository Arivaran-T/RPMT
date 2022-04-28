import { Container, Box, Paper } from "@mui/material";
import Heading from "../../Components/Heading";
import Header from "../../Components/Header";
import ASubmission from "../AllSubmissions/ASubmission";

function AllSubmissions(props) {
  return (
    <>
      <Header mode={props.mode} handler={props.handler} />

      <Paper elevation={2} square>
        <Box width="100%" minHeight={"83vh"}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Box py={3}>
              <Paper elevation={3}>
                <Box p={1} sx={{ bgcolor: "#073050", borderRadius: "3px" }}>
                  <Heading heading={`All Submissions`} />

                  <ASubmission />
                  <ASubmission />
                  <ASubmission />
                  <ASubmission />
                </Box>
              </Paper>
            </Box>
          </Container>
        </Box>
      </Paper>
    </>
  );
}

export default AllSubmissions;
