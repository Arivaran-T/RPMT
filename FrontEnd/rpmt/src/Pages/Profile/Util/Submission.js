import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  List,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Submission() {
  const data = ["some", "more", "data"];
  return (
    <>
      <Accordion sx={{ bgcolor: "#0F76CA" ,marginTop:2}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "open sans",
              fontWeight: "700",
              fontSize: "17px",
            }}
          >
            Submission Name
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <Divider sx={{ marginBottom: 1, }} />
            <Grid
              container
              alignItems={"center"}
              justifyContent="start"
              sx={{ textAlign: "left" }}
            >
              <Grid item xs={5}>
                <Typography sx={{ color: "#333" }} variant="h4">
                  Submitted date
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={{ color: "#333" }} variant="h4">
                  12/2/2022 12.00PM
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ marginBottom: 1 ,marginTop:2}} />
            <Grid
              container
              alignItems={"center"}
              justifyContent="start"
              sx={{ textAlign: "left" }}
            >
              <Grid item xs={5}>
                <Typography sx={{ color: "#333" }} variant="h4">
                  Status
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={{ color: "#333" }} variant="h4">
                  submitted
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ marginBottom: 1 ,marginTop:2}} />
            <Grid
              container
              alignItems={"center"}
              justifyContent="start"
              sx={{ textAlign: "left" }}
            >
              <Grid item xs={5}>
                <Typography sx={{ color: "#333" }} variant="h4">
                  Grade
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography sx={{ color: "#333" }} variant="h4">
                  15
                </Typography>
              </Grid>
            </Grid>
          </List>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Submission;
