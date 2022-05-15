import { Box, Button, Container, Paper, Typography } from "@mui/material";
import Header from "../../Components/Header";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleIcon from "@mui/icons-material/Article";

function Info(props) {
  return (
    <>
      <Header mode={props.mode} handler={props.handler} />
      <Box minHeight={"81vh"} component={Paper} elevation={1} square p={0.5}>
        <Container
          sx={{ mt: 4 }}
          component={Paper}
          variant="outlined"
          maxWidth={"sm"}
        >
          <Typography sx={{ my: 2, fontSize: "1.3rem", color: "#116BB1" }}>
            Submission title
          </Typography>
          <Typography
            sx={{
              my: 2,
              textAlign: "left",
              fontWeight: "600",
              fontSize: { xs: ".8rem", sm: ".9rem" },
            }}
          >
            Video provides a powerful way to help you prove your point. When you
            click Online Video, you can paste in the embed code for the video
            you want to add. You can also type a keyword to search online for
            the video that best fits your document. To make your document look
            professionally produced, Word provides header, footer, cover page,
            and text box designs that complement each other. For example, you
            can add a matching cover page, header, and sidebar. Click Insert and
            then choose the elements you want from the different galleries.
            Themes and styles also help keep your document coordinated. When you
            click Design and choose a new Theme, the pictures, charts, and
            SmartArt graphics change to match your new theme. When you apply
            styles, your headings change to match the new theme.
          </Typography>
          <Typography
            sx={{
              color: "#aaa",
              fontWeight: "700",
              mb: 2,
              fontSize: { xs: ".7rem", sm: ".9rem" },
            }}
          >
            Due Date : 2022/12/12
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }} mb={2}>
            <PictureAsPdfIcon sx={{ fontSize: 30 }} />
            <Button
              sx={{
                color: "#116BB1",
                textTransform: "none",
                fontWeight: "700",
              }}
              href="/uploads/"
            >
              example.pdf
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              sx={{
                color: "#116BB1",
                textTransform: "none",
                fontWeight: "700",
              }}
              variant="outlined"
              color="info"
              href="/submit/add/id"
            >
              Add Submisson
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Info;
