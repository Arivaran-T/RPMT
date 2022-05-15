import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { typography } from "@mui/system";
import Header from "../../Components/Header";
import { useNavigate } from "react-router-dom";

const Rowdata = (props) => {
  return (
    <>
      <Grid container justifyContent={"center"} alignItems="center">
        <Grid component={Typography} item xs={6}>
          {props.heading}
        </Grid>
        <Grid component={Typography} item xs={6}>
          N/A
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} />
    </>
  );
};

const data = [
  "Submission Status",
  "Grading Status",
  "Due date",
  "Time Reamining",
  "Last Modified",
  "Submission Comment",
];

function Submission(props) {
    const navigate = useNavigate();
  return (
    <>
      <Header mode={props.mode} handler={props.handler} />
      <Box
        component={Paper}
        sx={{ minHeight: "80vh" }}
        square
        elevation={1}
        py={3}
      >
        <Container maxWidth="md">
          <Box component={Paper} elevation={3} square p={2}>
            <Typography
              textAlign={"left"}
              variant="h6"
              sx={{ color: "#0D7FDC", mb: 2 }}
            >
              Submission Name
            </Typography>

            <Divider sx={{ my: 1 }} />
            {data.map((row) => {
              return <Rowdata heading={row} key={row} />;
            })}
            <Box my={2} textAlign={"right"}>
              <Button
                variant="contained"
                onClick={() => {
                  navigate(`/submit/add/id`);
                }}
              >
                Add Submission
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Submission;
