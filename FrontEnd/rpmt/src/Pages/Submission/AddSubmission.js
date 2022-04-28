import {
  Container,
  Box,
  Paper,
  Typography,
  Avatar,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import Header from "../../Components/Header";
import { makeStyles } from "@mui/styles";
import { grey, red } from "@mui/material/colors";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
const useStyle = makeStyles({
  lables: {
    textAlign: "left",
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: "13px",
    color: "#ddd",
  },
  inputs: {
    color: "#99ccff",
    background: "rgb(6, 74, 130)",
    borderRadius: "5px",
    fontFamily: "arial",
    fontWeight: "600",
    letterSpacing: ".5px",
  },
  data: {
    fontFamily: "Open Sans",
    fontWeight: "500",
    fontSize: "13px",
    color: "#ccc",
  },
  dpLabel: {
    width: "100%",
    bgcolor: "red",
  },
  btn: {
    "&:hover": {
      backgroundColor: "#fff",
      color: "#3c52b2",
    },
  },
});
function AddSubmission(props) {
  const classes = useStyle();
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
            sx={{
              borderRadius: "4px",
              bgcolor: grey[600],
              color: "#333",
            }}
          >
            <Box
              component={Paper}
              elevation={3}
              square
              p={2}
              sx={{
                borderRadius: "4px",
                bgcolor: grey[500],
                color: "#333",
              }}
            >
              <Box my={2} textAlign={"center"}>
                <label
                  className={classes.dpLabel}
                  htmlFor="image-dp"
                  textAlign={"center"}
                  onchange="readURL(this);"
                >
                  <CloudUploadIcon
                    sx={{
                      width: 200,
                      height: 200,
                      alignContent: "center",
                    }}
                  />
                  <Typography
                    textAlign={"center"}
                    variant="body1"
                    sx={{ color: "#0D7FDC", mb: 1 }}
                  >
                    Drag and drop here
                  </Typography>
                </label>
                <input hidden id="image-dp" type={"file"} />
              </Box>
            </Box>
            <br />

            <Grid
              container
              direction="row"
              alignItems={"center"}
              justifyContent="space-between"
            >
              <Grid item>
                <Button
                  alignItems="center"
                //   disableElevation
                  sx={{ color: "#fff", fontFamily: "open sans" }}
                  variant="contained"
                  className={classes.btn}
                >
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disableElevation
                  sx={{ color: "#fff", fontFamily: "open sans" }}
                  color="error"
                  //   endIcon={<DeleteIcon fontsize="small" />}
                  variant="contained"
                  className={classes.btn}
                >
                  Remove
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
export default AddSubmission;
