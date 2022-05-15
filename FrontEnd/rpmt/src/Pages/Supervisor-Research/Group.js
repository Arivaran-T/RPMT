import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Header from "../../Components/Header";

function Group(props) {
  return (
    <>
      <Header handler={props.handler} />
      <Box
        sx={{}}
        minHeight="79vh"
        component={Paper}
        square
        elevation={0}
        py={2}
      >
        <Container maxWidth="sm">
          <Box
            component={Paper}
            variant="outlined"
            p={2}
            sx={{
              display: "Flex",
              flexDirection: "column",
              alignItem: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography sx={{ color: "#1071bc", fontSize: 17, mb: 2 }}>
              Group Name
            </Typography>
            <Divider />
            <Box
              sx={{
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
              }}
              py={2}
            >
              <Typography sx={{ color: "#888", fontSize: 16 }}>
                Research Topic
              </Typography>
              <Typography sx={{ color: "#ccc", fontSize: 15 }}>
                Supervisor :{" "}
                <span style={{ color: "#E28743" }}>supervisor name</span>
              </Typography>
              <Typography sx={{ color: "#ccc", fontSize: 15 }}>
                Co-Supervisor :{" "}
                <span style={{ color: "#E28743" }}>Co-supervisor name</span>
              </Typography>
              <Typography sx={{ color: "#ccc", fontSize: 15 }}>
                Student Count : <span style={{ color: "#E28743" }}>Count</span>
              </Typography>
              <Typography sx={{ color: "#ccc", fontSize: 15 }}>
                Group Leader : <span style={{ color: "#E28743" }}>Name</span>
              </Typography>
              <Divider sx={{ my: 3 }} />
              <Grid container>
                <Grid item xs={4}>
                  <Typography sx={{ color: "#ccc", fontSize: 15 }}>
                    Members :
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography sx={{ color: "#E28743", fontSize: 15 }}>
                    Name
                  </Typography>
                  <Typography sx={{ color: "#E28743", fontSize: 15 }}>
                    Name
                  </Typography>
                  <Typography sx={{ color: "#E28743", fontSize: 15 }}>
                    Name
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ my: 3 }} />
              <Button color="success" variant="contained">Any Btn</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Group;
