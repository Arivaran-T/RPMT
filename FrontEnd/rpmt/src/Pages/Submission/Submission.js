import { Container, Box, Paper } from "@mui/material";
import Header from "../../Components/Header";

function Submission(props) {
  return (
    <>
      <Header mode={props.mode} handler={props.handler} />
      <Paper square elevation={1}>
        <Container maxWidth="md">
          <Box py={3}>
            <Box></Box>
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default Submission;
