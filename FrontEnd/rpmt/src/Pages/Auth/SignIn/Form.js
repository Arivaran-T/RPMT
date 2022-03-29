//mui
import {
  makeStyles,
  Typography,
  TextField,
  FormControl,
  Grid,
  Button,
} from "@material-ui/core";

const useStyle = makeStyles({
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
    padding: "2rem",
  },
  input_margin: {
    marginTop: "3%",
    marginBottom: "3%",
  },
  button_margin: {
    marginTop: "5%",
    marginBottom: "10%",
  },
});

// const submitHandler = () => {};

function SignInForm() {
  const classes = useStyle();
  return (
    <Grid container justifyContent="center" spacing={0}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10}>
        {/* <FormControl fullWidth margin="normal" variant="outlined"> */}
        <Typography className={classes.heading} variant="h3" align="center">
          Welcome Back,
        </Typography>
        <TextField
          fullWidth
          className={classes.input_margin}
          margin="normal"
          id="email"
          label="Email"
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.input_margin}
          margin="normal"
          id="Password"
          label="Password"
          variant="outlined"
        />
        <Typography align="right">
          <Button
            href="/"
            style={{ textTransform: "lowercase" }}
            variant="text"
          >
            forget password?
          </Button>
        </Typography>
        <Button
          fullWidth
          size="medium"
          variant="contained"
          color="secondary"
          className={classes.button_margin}
        >
          Sign In
        </Button>
        {/* </FormControl> */}
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
}

export default SignInForm;
