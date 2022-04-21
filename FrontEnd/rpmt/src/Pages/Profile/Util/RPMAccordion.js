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

const useStyle = makeStyles({ accortion: { backgroundColor: "red" } });

function RPMAccordion() {
  const classes = useStyle();
  const data = ["some", "more", "data"];

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Grouping requests</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <TransitionGroup>
              {data.map((da) => {
                return (
                  <Collapse key={da}>
                    <GroupRequest reject={()=>{}} />
                  </Collapse>
                );
              })}
            </TransitionGroup>
          </List>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default RPMAccordion;
