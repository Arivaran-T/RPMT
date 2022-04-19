//mui
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

const useStyle = makeStyles({
  message: {
    fontFamily: "Amaranth",
    color: "#E28743",
    fontSize: "16px",
    textAlign: "left",
  },
  date: {
    fontFamily: "Calibri",
    color: "#A19F9E",
    fontSize: "11px",
  },
  author: {
    fontFamily: "Arial",
    color: "#DFDADA",
    fontSize: "13px",
  },
});

function LeftMessage() {
  const classes = useStyle();
  return (
    <Box
      maxWidth={400}
      m={1.5}
      sx={{
        direction: "rtl",
        boxShadow: "0px 1px 3px 0px #05243C",
        float: "right",
        backgroundColor: "#05243C",
        borderRadius: "0 2 2 3",
      }}
      p={1}
    >
      <Typography className={classes.author} variant="subtitle1">
        User name
      </Typography>
      <Typography className={classes.message} sx={{ wordBreak: "break-all" }}>
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
      </Typography>
      <Typography className={classes.date} variant="subtitle2">
        12/12/2022-12.00PM
      </Typography>
    </Box>
  );
}

export default LeftMessage;
