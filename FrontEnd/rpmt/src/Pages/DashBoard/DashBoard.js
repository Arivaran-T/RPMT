import { Container, Box, Paper, IconButton } from "@mui/material";
import Header from "../../Components/Header";
import {
  Timeline,
  TimelineConnector,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";
import SingleTimelineItem from "./SignleTimelineItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ArticleIcon from "@mui/icons-material/Article";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useNavigate } from "react-router-dom";

function DashBoard(props) {
  return (
    <>
      <Header mode={props.mode} handler={props.handler} />

      <Paper elevation={2} square>
        <Box width="100%" minHeight={"83vh"}>
          <Container maxWidth="md" sx={{ textAlign: "left" }}>
            <Box py={3}>
              <Paper elevation={3}>
                <Box p={1} sx={{ bgcolor: "#073050", borderRadius: "3px" }}>
                  <Timeline position="right">
                    <NewSubmission />
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

const NewSubmission = () => {
  const navigate = useNavigate();
  return (
    <TimelineItem>
      <TimelineOppositeContent
        style={{
          maxWidth: "1px",
          paddingLeft: "0px",
          paddingRight: "0px",
        }}
      />
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="info">
          <AddBoxIcon
            onClick={() => {
              navigate("/submission/new");
            }}
            sx={{ height: "30px", width: "30px", cursor: "pointer" ,color:"#1071bc"}}
          />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ textAlign: "center" }}>
        <Box
          my={3}
          pt={0.5}
          pl={{ xs: 1, sm: 2 }}
          minHeight="50px"
          onClick={() => {
            navigate("/submission/new");
          }}
          sx={{
            bgcolor: "#1385E1",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            color:"#073050",
            textAlign:"center",
            "&:hover": {
              bgcolor: "#888",
              color: "#fff",
            },
          }}
        >
          Add new submission
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};
export default DashBoard;
