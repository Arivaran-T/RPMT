//mui
import { Box, Grid, Paper } from "@mui/material";

import Header from "../../../Components/Header";
import SideBar from "./SideBar";
import ChatBox from "./ChatBox";

function Chat(props) {
  return (
    <>
      <Header mode={props.mode} handler={props.handler} />
      <Paper elevation={2} square>
        <Grid
          py={4}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={1} sm={1} lg={2}></Grid>
          <Grid
            sx={{
              backgroundColor: "#555",
            }}
            item
            display={{ xs: "none", sm: "block" }}
            xs={0}
            sm={3}
            lg={2}
          >
            <Box
              sx={{
                height: 550,
              }}
              style={{
                maxHeight: 550,
                direction: "rtl",
                overflow: "auto",
              }}
            >
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
              <SideBar />
    
            </Box>
          </Grid>
          <Grid item xs={10} sm={7} lg={6}>
            <Box
              sx={{
                height: 550,
              }}
            >
              <ChatBox />
            </Box>
          </Grid>
          <Grid item xs={1} sm={1} lg={2}></Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Chat;
