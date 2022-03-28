import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

//import pages
import SignIn from "./Pages/Auth/SignIn/SignIn";
import Header from "./Components/Header";
import "./App.css";

//mui
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { grey } from "@mui/material/colors";

function App() {
  const [mode, setMode] = useState("light");

  const theme1 = createTheme({
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            primary: {
              main: "#E28743",
            },
            background: {
              default: "#e28743",
              paper: "#fff",
            },
            secondary: {
              main: "#073050",
            },
            // divider: amber[200],
            button: "#E28743",
            text: {
              primary: "#073050",
              secondary: "#073050",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#073050",
            },
            secondary: {
              main: "#fff",
            },
            // divider: deepOrange[700],
            background: {
              default: "#073050",
              paper: "#273443",
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
  });

  const modeHandler = (value) => {
    setMode(value);
  };

  return (
    <ThemeProvider theme={theme1}>
      <Router>
        <Header handler={modeHandler} />
        <Routes>
          <Route path="/auth/sign-in" exact element={<SignIn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
