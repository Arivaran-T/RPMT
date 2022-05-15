import { Box, Container, Divider, Paper, Typography } from "@mui/material";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";

function SubmissionTypes(props) {
  return (
    <>
      <Header handler={props.handler} />
      <Box component={Paper} square elevation={0} minHeight="77vh" py={2.5}>
        <Container maxWidth="sm">
          <Box
            component={Paper}
            variant="outlined"
            p={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>All Submissions</Typography>
            <Box
              my={2}
              width={"100%"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SingleSubmissionTypes />
              <SingleSubmissionTypes />
              <SingleSubmissionTypes />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

const SingleSubmissionTypes = (props) => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      component={Paper}
      elevation={1}
      py={2}
      px={1}
      mb={2}
      onClick={() => {
        navigate("/submissions/:id");
      }}
      sx={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ color: "#1071bc" }}>Submission Title</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Typography>
        <span style={{ color: "#E28743" }}>Total Submissions :</span> 12
      </Typography>
    </Box>
  );
};

export default SubmissionTypes;
