import {
  Avatar,
  Box,
  Container,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Header from "../../Components/Header";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import PublishIcon from "@mui/icons-material/Publish";

//react


function NewSubmission(props) {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  return (
    <>
      <Header handler={props.handler} />
      <Box py={2} minHeight={"78vh"} component={Paper} evelavtion={0} square>
        <Container maxWidth="sm">
          <Box
            component={Paper}
            variant="outlined"
            p={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: { md: 18, xs: 13 }, color: "#1071bc" }}>
              New Submission
            </Typography>
            <Box width={"95%"}>
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Title"
                  required
                  color="success"
                  autoFocus
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disablePast
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        label="Due date"
                        color="success"
                        margin="normal"
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Due Time"
                    value={time}
                    onChange={(newValue) => {
                      setTime(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField color="success" margin="normal" {...params} />
                    )}
                  />
                </LocalizationProvider>
                <TextField
                  multiline
                  maxRows={5}
                  fullWidth
                  margin="normal"
                  label="Description"
                  required
                  color="success"
                />
                <input type="file" hidden id="doc" />
                <label htmlFor="doc" style={{ marginTop: 2 }}>
                  <Typography sx={{ color: "#1071bc" }}>Document</Typography>
                  <Avatar
                    sx={{ cursor: "pointer", width: "100%", height: 50, mt: 2 }}
                    variant="square"
                  >
                    <PublishIcon size="large" sx={{ color: "#333" }} />
                  </Avatar>
                </label>
                {false && (
                  <Typography sx={{ fontWeight: "600", fontSize: 12 }}>
                    Selected Doc :
                  </Typography>
                )}

                <input type="file" hidden id="Scheme" />
                <label htmlFor="Scheme" style={{ marginTop: 4 }}>
                  <Typography sx={{ color: "#1071bc", mt: 2 }}>
                    Marking Scheme
                  </Typography>
                  <Avatar
                    sx={{ cursor: "pointer", width: "100%", height: 50, mt: 2 }}
                    variant="square"
                  >
                    <PublishIcon size="large" sx={{ color: "#333" }} />
                  </Avatar>
                </label>
                {false && (
                  <Typography sx={{ fontWeight: "600", fontSize: 12 }}>
                    Selected Scheme :
                  </Typography>
                )}
                <Button
                  sx={{
                    my: 3,
                    color: "#333",
                    bgcolor: "#1071bc",
                    "&:hover": { color: "#fff" },
                  }}
                  variant="contained"
                >
                  Add
                </Button>
              </FormControl>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default NewSubmission;
