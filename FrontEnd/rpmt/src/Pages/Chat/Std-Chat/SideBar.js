import { Box, Avatar, Toolbar, Stack, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

function SideBar() {
  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
          backgroundColor: "#05243C",
          boxShadow: "0px 1px 2px 0px #333",
          borderRadius:2,
        }}
        m={2}
        py={1}
        style={{ direction: "ltr" }}
      >
        <Toolbar>
          <Avatar sx={{ width: 30, height: 30 }} alt="User image" src="/static/images/avatar/1.jpg">
            U
          </Avatar>
          <Box sx={{ flexGrow: 0.1 }} ml={1} />
          <Stack direction="column" spacing={0}>
            <Typography
              noWrap
              fontFamily={"open sans"}
              fontWeight={"700"}
              color={"#DFDADA"}
              variant="h4"
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
    </>
  );
}

export default SideBar;
