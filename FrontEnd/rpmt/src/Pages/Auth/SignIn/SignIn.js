import Header from "../../../Components/Header";

//mui
import { Grid, Paper, Typography, TextField, Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container1: {
    paddingTop: "3rem",
    width: "100%",
    margin: "0",
  },
  paperCard: {
    height: "100%",
  },
  paperContainer: {
    paddingBottom: "3rem",
  },
  container: {
    width: "100%",
  },
  heading: {
    fontFamily: "Open Sans",
    fontWeight: "bold",
    marginTop: "3rem",
    marginBottom: "3rem",
  },
  form_conatiner: {
    padding: "4rem",
  },
  input_margin: {
    padding: "0",
  },
  button_margin: {
    marginTop: "5",
    marginBottom: "10",
  },
});

function SignIn(props) {
  //hooks
  const classes = useStyles();

  return (
    <>
      <Header mode={props.mode} handler={props.handler} />
      <Paper className={classes.paperContainer} square elevation={0}>
        <Box className={classes.container1} minHeight="75vh">
          <Grid
            justifyContent="center"
            alignItems="stretch"
            direction="row"
            container
            spacing={0}
          >
            <Grid item xs={1} sm={1} md={1} lg={2}></Grid>
            <Grid item className={classes.card} xs={10} sm={6} md={7} lg={5}>
              <Paper className={classes.paperCard} square elevation={4}>
                <Grid
                  sx={{ height: "100%" }}
                  container
                  alignContent="center"
                  justifyContent="center"
                  spacing={0}
                >
                  <Grid item xs={1}></Grid>
                  <Grid item xs={10}>
                    <Typography
                      mt={2}
                      mb={2}
                      className={classes.heading}
                      variant="h3"
                      align="center"
                    >
                      Welcome Back,
                    </Typography>
                    <Box mb={1}>
                      <TextField
                        mt={4}
                        color="primary"
                        fullWidth
                        className={classes.input_margin}
                        margin="normal"
                        id="email"
                        label="Email"
                        variant="outlined"
                        size="medium"
                      />
                    </Box>
                    <TextField
                      mt={4}
                      fullWidth
                      className={classes.input_margin}
                      margin="normal"
                      id="Password"
                      label="Password"
                      variant="outlined"
                      size="medium"
                    />
                    <Typography align="right">
                      <Box mt={1} mb={1}>
                        <Button
                          href="/password/reset"
                          style={{ textTransform: "lowercase" }}
                          variant="text"
                          color="info"
                        >
                          forget password?
                        </Button>
                      </Box>
                    </Typography>
                    <Box mt={2} mb={3}>
                      <Button
                        fullWidth
                        size="medium"
                        variant="contained"
                        color="success"
                        className={classes.button_margin}
                      >
                        Sign In
                      </Button>
                    </Box>
                    {/* </FormControl> */}
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={1} sm={1} md={1} lg={2}></Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default SignIn;
