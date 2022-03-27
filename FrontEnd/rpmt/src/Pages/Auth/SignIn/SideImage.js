import image from "../../../Assets/login_img.jpg";

//mui
import { CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Button } from "@mui/material";

const useStyle = makeStyles({
  heading: {
    fontFamily: "Amaranth",
  },
  sub: {
    fontFamily: "Arial",
  },
});

function SideImage(props) {
  const classes = useStyle();

  return (
    <div style={{ position: "relative" }}>
      <CardMedia
        style={{ height: "auto", paddingTop: "0" }}
        component="img"
        image={image}
      />
      <div
        style={{
          position: "absolute",
          color: "white",
          top: "3rem",
          width: "100%",
          textAlign: "center",
          margin: "auto",
          height: "50%",
        }}
      >
        {" "}
        <Typography className={classes.heading} variant="h4">
          {props.heading}
        </Typography>
        <Typography className={classes.sub} variant="h6">
          {props.subheading}
        </Typography>
      </div>
      <div
        style={{
          position: "absolute",
          color: "white",
          top: "91%",
          width: "100%",
          textAlign: "center",
          margin: "auto",
          height: "50%",
        }}
      >
        <Button color="secondary" variant="outlined">
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default SideImage;
