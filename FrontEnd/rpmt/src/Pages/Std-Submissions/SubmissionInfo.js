import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  Divider,
} from "@mui/material";

import Header from "../../Components/Header";

function SubmissionInfo(props) {
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
          <Box
            component={Paper}
            elevation={3}
            square
            p={2}
            sx={{ bgcolor: "#073050" }}
          >
            <Typography
              textAlign={"center"}
              variant="h6"
              sx={{ color: "#0D7FDC", mb: 2 }}
            >
              GroupName [GroupID]
            </Typography>

            <Grid container justifyContent={"center"} alignItems="center">
              <Grid component={Typography} item xs={6}>
                Detail1
              </Grid>
              <Grid component={Typography} item xs={6}>
                Info
              </Grid>
            </Grid>
            <Divider sx={{ my: 1 }} />
            <Grid container justifyContent={"center"} alignItems="center">
              <Grid component={Typography} item xs={6}>
                Detail2
              </Grid>
              <Grid component={Typography} item xs={6}>
                Info
              </Grid>
            </Grid>
            <Divider sx={{ my: 1 }} />
            <Grid container justifyContent={"center"} alignItems="center">
              <Grid component={Typography} item xs={6}>
                Detail3
              </Grid>
              <Grid component={Typography} item xs={6}>
                Info
              </Grid>
            </Grid>
            <Divider sx={{ my: 1 }} />
            <Grid container justifyContent={"center"} alignItems="center">
              <Grid component={Typography} item xs={6}>
                Detail4
              </Grid>
              <Grid component={Typography} item xs={6}>
                Info
              </Grid>
            </Grid>
            <Divider sx={{ my: 1 }} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default SubmissionInfo;
