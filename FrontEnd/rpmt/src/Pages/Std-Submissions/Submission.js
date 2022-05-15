import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function ASubmission() {
  let history = useNavigate();
  const submissionHandler = () => {
    history("/submissions/std/ww");
  };
  return (
    <>
      <Box
        my={1}
        mx={2}
        p={1.2}
        px={2}
        bgcolor="#1385E1"
        borderRadius={1}
        onClick={submissionHandler}
      >
        <Grid
          container
          direction={"row"}
          justifyContent="start"
          alignItems={"center"}
        >
          <Grid item xs={7} sm={4}>
            <Grid
              container
              justifyContent={"start"}
              spacing={1}
              alignItems="center"
            >
              <Grid item>
                <Grid
                  container
                  justifyContent={"start"}
                  direction="column"
                  alignItems={"start"}
                >
                  <Grid>
                    <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
                      Group ID
                    </Typography>
                  </Grid>
                  <Grid>
                    <Grid
                      item
                      display={{ xs: "block", sm: "none" }}
                      sx={{ color: "#FFFFFF" }}
                    >
                      <Typography variant="h4">Group Name</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} sm={4} display={{ xs: "none", sm: "block" }}>
            <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
              Group Name
            </Typography>
          </Grid>
          <Grid item sm={4} xs={5} sx={{ textAlign: "right" }}>
            <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
              Other Info
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ASubmission;
