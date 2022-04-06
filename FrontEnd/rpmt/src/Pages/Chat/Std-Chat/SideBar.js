import {
  Box,
  Avatar,
  Divider,
  Toolbar,
  Stack,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

function SideBar() {
  return (
    <>
      <Box py={1} style={{ direction: "ltr" }}>
        <Toolbar>
          <Avatar alt="User image" src="/static/images/avatar/1.jpg">
            U
          </Avatar>
          <Box sx={{ flexGrow: 0.1 }} ml={1} />
          <Stack direction="column" spacing={0}>
            <Typography
              fontFamily={"open sans"}
              fontWeight={"700"}
              color={"#DFDADA"}
            >
              UserName
            </Typography>
            <Typography
              fontFamily={"Amaranth"}
              fontWeight={"500"}
              color={"#8D8C8C"}
            >
              date
            </Typography>
          </Stack>
        </Toolbar>
      </Box>
      <Divider />
    </>
  );
}

export default SideBar;
