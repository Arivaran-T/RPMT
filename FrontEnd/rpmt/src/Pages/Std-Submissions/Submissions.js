import {
  Paper,
  Box,
  Grid,
  TextField,
  IconButton,
  FormControl,
  Skeleton,
} from "@mui/material";
import { Container } from "@mui/material";
import Heading from "../../Components/Heading";
import Header from "../../Components/Header";
import Submission from "./Submission";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";

//react
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyle = makeStyles({
  inputs: {
    color: "#99ccff",
    background: "rgb(6, 74, 130)",
    borderRadius: "5px",
    fontFamily: "arial",
    fontWeight: "600",
    letterSpacing: ".5px",
  },
});

function AllSubmissions(props) {
  //url
  const URL = "http://localhost:5000/api/v1/";

  //user data
  const { token, userID, role } = useSelector((state) => state.loging);

  //state
  const [submissions, setSubmissions] = useState([]);
  const [isLoaded, setLoaded] = useState(false);

  const classes = useStyle();

  //useEffect call
  useEffect(() => {
    axios
      .get(`${URL}documents/staff/${userID}`)
      .then((res) => {
        console.log(res.data);
        setLoaded(true);
        setSubmissions(res.data);
      })
      .catch((er) => {
        setLoaded(true);
      });
  }, []);

  return (
    <>
      <Header mode={props.mode} handler={props.handler} />
      <Paper elevation={2} square>
        <Box width="100%" minHeight={"83vh"}>
          <Container maxWidth="sm" sx={{ textAlign: "center" }}>
            <Box py={3}>
              <Paper elevation={3}>
                <Box p={1} sx={{ bgcolor: "#073050", borderRadius: "3px" }}>
                  <Heading heading={`All Submissions`} />
                  <Container maxWidth="sm">
                    {isLoaded ? (
                      submissions.length > 0 ? (
                        submissions.map((row, index) => {
                          return <Submission key={index} data={row} />;
                        })
                      ) : (
                        <>No data available</>
                      )
                    ) : (
                      <>
                        <Skeleton
                          animation="pulse"
                          variant="rectangular"
                          sx={{ borderRadius: 1, mb: 2 }}
                          width={"100%"}
                          height={50}
                        />
                        <Skeleton
                          animation="pulse"
                          variant="rectangular"
                          sx={{ borderRadius: 1, mb: 2 }}
                          width={"100%"}
                          height={50}
                        />
                        <Skeleton
                          animation="pulse"
                          variant="rectangular"
                          sx={{ borderRadius: 1, mb: 2 }}
                          width={"100%"}
                          height={50}
                        />
                      </>
                    )}
                  </Container>
                </Box>
              </Paper>
            </Box>
          </Container>
        </Box>
      </Paper>
    </>
  );
}

export default AllSubmissions;
