import { Box, Paper } from "@mui/material";
import Header from "../../Components/Header";

function Groups(props) {
  return (
    <>
      <Header handler={props.handler} />
      <Box component={Paper} square elevation={0} minHeight="80vh" py={2}>
          //TODO
      </Box>
    </>
  );
}

export default Groups;
