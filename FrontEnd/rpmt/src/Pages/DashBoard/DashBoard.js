import { Container, Box, Paper } from "@mui/material";
import Header from "../../Components/Header";
import { Timeline } from "@mui/lab";
import SingleTimelineItem from "./SignleTimelineItem";

function DashBoard(props) {
  return (
    <>
      <Header mode={props.mode} handler={props.handler} />

      <Paper elevation={2} square>
        <Box height={"100%"} width="100%">
          <Container maxWidth="md" sx={{ textAlign: "left" }}>
            <Box py={3}>
              <Paper elevation={3}>
                <Box p={1} sx={{ bgcolor: "#073050", borderRadius: "3px" }}>
                  <Timeline position="right">
                    <SingleTimelineItem icon="doc" />
                    <SingleTimelineItem />
                    <SingleTimelineItem icon="doc" />
                  </Timeline>
                </Box>
              </Paper>
            </Box>
          </Container>
        </Box>
      </Paper>
    </>
  );
}

export default DashBoard;
