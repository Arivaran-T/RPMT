import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

function UserData(props) {
  return (
    <>
      <Box my={1} mx={2} p={1.2} px={2} bgcolor="#eee" borderRadius={1}>
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
                <Avatar src="" alt="dp">
                  U
                </Avatar>
              </Grid>
              <Grid item>
                <Grid
                  container
                  justifyContent={"start"}
                  direction="column"
                  alignItems={"start"}
                >
                  <Grid>
                    <Typography variant="h4" sx={{ color: "#0C4D82" }}>
                      User Name
                    </Typography>
                  </Grid>
                  <Grid>
                    <Grid
                      item
                      display={{ xs: "block", sm: "none" }}
                      sx={{ color: "#333" }}
                    >
                      <Typography variant="h4">Research Field</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={0} sm={4} display={{ xs: "none", sm: "block" }}>
            <Typography variant="h4" sx={{ color: "#333" }}>
              Research Field
            </Typography>
          </Grid>
          <Grid item sm={4} xs={5} sx={{textAlign:"right"}}>
            <Button variant="contained" disableElevation color="secondary">
              <Typography variant="subtitle2">Request</Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UserData;
