//mui
import {
  makeStyles,
  Typography,
  TextField,
  FormControl,
} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    width: "100%",
    padding: "2rem",
  },
  heading: {
    fontFamily: "Open Sans",
    fontWeight: "bold",
  },
});

const submitHandler = () => {};

function SignInForm() {
  const classes = useStyle();
  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <FormControl fullWidth variant="outlined">
        <Typography className={classes.heading} variant="h3" align="center">
          Welcome Back,
        </Typography>
        <TextField label={"Email"} id="email" fullWidth margin="normal" />
      </FormControl>
    </form>
  );
}

export default SignInForm;
