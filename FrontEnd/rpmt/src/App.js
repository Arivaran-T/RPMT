import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

//import pages
import SignIn from "./Pages/Auth/SignIn/SignIn";
import SignUp from "./Pages/Auth/SignUp/SignIn";
import "./App.css";

//mui
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { amber } from "@material-ui/core/colors";

function App() {
  const [mode, setMode] = useState("light");

  let theme1 = createTheme({
    typography: {
      mode,
      primary: {
        main: "#073050",
      },
    },
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#E28743",
              button: "#bbb",
            },
            status: {
              danger: "#E28743",
            },
            background: {
              default: "#e28743",
              paper: "#fff",
              button: "#073050",
            },
            secondary: {
              main: "#073050",
            },
            divider: amber[200],
            text: {
              primary: "#073050",
              secondary: "#073050",
            },
          }
        : {
            primary: {
              main: "#073050",
            },
            secondary: {
              main: "#064663",
            },
            // divider: deepOrange[700],
            background: {
              default: "#073050",
              paper: "#273443",
              button: "#aaa",
            },
            components: {
              MuiButton: {
                styleOverrides: {
                  outlined: {
                    backgroundColor: "green",
                  },
                },
              },
            },
            text: {
              primary: "#fff",
              // secondary: grey[500],
            },
            typography: {
              primary: "#fff",
              fontSize: 12,
            },
          }),
    },
  });

  theme1 = responsiveFontSizes(theme1);

  theme1.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme1.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };
  theme1.typography.h4 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme1.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  const modeHandler = (value) => {
    setMode(value);
  };

  console.log(mode);
  return (
    <div>
      <ThemeProvider theme={theme1}>
        <Router>
          <Routes>
            <Route
              path="/auth/sign-in"
              exact
              element={<SignIn handler={modeHandler} />}
            />
            <Route path="/auth/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
