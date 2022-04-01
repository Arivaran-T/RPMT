import image from "../../../Assets/login_img.jpg";

//mui
import { Card, CardMedia, Typography } from "@material-ui/core";
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
    <Card raised>
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <CardMedia
          style={{ height: "100%", paddingTop: "0", objectFit: "cover" }}
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
            top: "90%",
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
    </Card>
  );
}

export default SideImage;