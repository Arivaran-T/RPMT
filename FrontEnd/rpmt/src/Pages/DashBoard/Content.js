import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BackupIcon from "@mui/icons-material/Backup";

function Content(props) {
  return (
    <>
      <Box
        my={3}
        pt={0.5}
        pl={2}
        height={"50px"}
        sx={{
          bgcolor: "#1385E1",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
        >
          <Grid item sm={4} xs={6}>
            <Grid container direction={"row"}>
              <Grid item>
                <Typography variant="h4" align="left" fontSize={17}>
                  Submission Name
                </Typography>
              </Grid>
              <Grid display={{ xs: "block", sm: "none" }} item>
                <Typography
                  noWrap
                  fontSize={11}
                  fontWeight={"bold"}
                  variant="h4"
                  align="left"
                  sx={{ color: "#DFDADA", fontFamily: "Arial" }}
                >
                  2022/02/22-12.00PM
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} display={{ xs: "none", sm: "block" }}>
            <Typography
              fontSize={13}
              fontWeight={"bold"}
              variant="h4"
              align="left"
              sx={{ color: "#DFDADA", fontFamily: "Arial" }}
            >
              <Grid
                container
                justifyContent="left"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <CalendarMonthIcon />
                </Grid>
                <Grid item>2022/02/22-12.00PM</Grid>
              </Grid>
            </Typography>
          </Grid>
          <Grid xs={6} sm={3}>
            {props.icon === "doc" ? (
              <Typography variant="h4">
                <Button
                  variant="contained"
                  size="small"
                  disableElevation
                  href="/submission/id"
                  startIcon={<BackupIcon />}
                  color="secondary"
                >
                  Submit
                </Button>
              </Typography>
            ) : (
              <Typography
                fontFamily={"Open Sans"}
                fontSize={13}
                fontWeight={"bold"}
                sx={{ color: "#073050" }}
              >
                Submitted
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Content;
