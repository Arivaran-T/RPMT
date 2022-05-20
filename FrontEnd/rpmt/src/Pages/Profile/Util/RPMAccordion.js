import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Collapse,
  List,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import GroupRequest from "./GroupRequest";
import { TransitionGroup } from "react-transition-group";

//react
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyle = makeStyles({ accortion: { backgroundColor: "red" } });

function RPMAccordion() {
  //hooks
  const classes = useStyle();

  //url
  const URL = "http://localhost:5000/api/v1/";

  //user data
  const { token, userID, role } = useSelector((state) => state.loging);

  //state
  const data = ["some", "more", "data"];
  const [users, setUsers] = useState();
  const [isLoaded, setLoaded] = useState(false);
  const [grp_id, setGrpID] = useState("");

  //useEffect
  useEffect(() => {
    axios
      .get(`${URL}users/${userID}`)
      .then((res) => {
        setGrpID(res.data.group_id);
        axios
          .get(`${URL}groups/requests/${res.data.group_id}`)
          .then((res) => {
            setLoaded(true);
            if (res.data) {
              setUsers(res.data);
            }
          })
          .catch((er) => {
            setLoaded(true);
          });
      })
      .catch((er) => {
        setLoaded(true);
      });
  }, []);

  return (
    <>
      <ToastContainer />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Grouping requests</Typography>
        </AccordionSummary>
        {isLoaded ? (
          <AccordionDetails>
            <List>
              <TransitionGroup>
                {users ? (
                  users.map((row, index) => {
                    return (
                      <Collapse key={index}>
                        <GroupRequest grp_id={grp_id} data={row} />
                      </Collapse>
                    );
                  })
                ) : (
                  <></>
                )}
              </TransitionGroup>
            </List>
          </AccordionDetails>
        ) : (
          <></>
        )}
      </Accordion>
    </>
  );
}

export default RPMAccordion;
