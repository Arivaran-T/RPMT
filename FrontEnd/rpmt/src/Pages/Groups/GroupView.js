import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
  Grid,
  TextField,
  IconButton,
  Pagination,
  Avatar,
} from "@mui/material";
import Header from "../../Components/Header";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function GroupView(props) {
  const [pannelView, setPannelView] = useState(false);

  return (
    <>
      <Header handler={props.handler} />
      <Box
        sx={{}}
        minHeight="79vh"
        component={Paper}
        square
        elevation={0}
        p={2}
      >
        <Grid
          container
          direction={"row"}
          justifyContent="center"
          alignItems={"stretch"}
          spacing={2}
          minHeight="50vh"
        >
          <Grid item xs={12} sm={6} md={4}>
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
                  Student Count :{" "}
                  <span style={{ color: "#E28743" }}>Count</span>
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
                <Grid container>
                  <Grid item xs={4}>
                    <Typography sx={{ color: "#ccc", fontSize: 15 }}>
                      Pannel :
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <>
                      <Box
                        my={1}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ color: "#E28743", fontSize: 15 }}>
                          Name
                        </Typography>
                        <Button
                          color="error"
                          sx={{
                            color: "red",
                            textTransform: "none",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          Remove
                        </Button>
                      </Box>
                      <Divider />
                    </>
                    <>
                      <Box
                        my={1}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ color: "#E28743", fontSize: 15 }}>
                          Name
                        </Typography>
                        <Button
                          color="error"
                          sx={{
                            color: "red",
                            textTransform: "none",
                            fontWeight: "600",
                            fontSize: 14,
                          }}
                        >
                          Remove
                        </Button>
                      </Box>
                      <Divider />
                    </>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 3 }} />
                <Button
                  color="success"
                  variant="contained"
                  href="#pannel"
                  onClick={() => {
                    setPannelView(true);
                  }}
                >
                  Add Pannel
                </Button>
              </Box>
            </Box>
          </Grid>
          {pannelView && (
            <Grid id="pannel" item xs={12} sm={6} md={4}>
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
                <Typography sx={{ fontSize: 17, color: "#1071bc" }}>
                  Select Pannel
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box sx={{ display: "flex" }}>
                  <TextField
                    size="small"
                    fullWidth
                    margin="none"
                    color="success"
                    required
                    autoFocus
                    label="search"
                  />
                  <IconButton
                    sx={{
                      borderRadius: 0.5,
                      bgcolor: "#E28743",
                      color: "#fff",
                      "&:hover": { bgcolor: "#1071bc" },
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Box>
                <Box mt={2}>
                  <Staff />
                  <Staff />
                  <Staff />
                  <Staff />
                  <Staff />
                </Box>
                <Box
                  my={3}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Pagination
                    color="standard"
                    count={4}
                    variant="outlined"
                    shape="rounded"
                  />
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </>
  );
}

const Staff = () => {
  return (
    <Box
      component={Paper}
      variant="outlined"
      mb={2}
      p={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar src="https://www.denofgeek.com/wp-content/uploads/2021/10/Breaking-Bad-Face-Off.jpg?resize=768%2C432"></Avatar>
      <Typography
        sx={{ color: "#1071bc", fontWeight: "600", fontSize: 16, ml: 2 }}
      >
        Name
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Button color="success">Add</Button>
    </Box>
  );
};
export default GroupView;
