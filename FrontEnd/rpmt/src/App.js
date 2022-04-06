import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";

//import pages
import SignIn from "./Pages/Auth/SignIn/SignIn";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Footer from "./Components/Footer";
import "./App.css";
import Chat from "./Pages/Chat/Std-Chat/Chat";

//mui
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

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
              dark:"#073050"//change
            },
            status: {
              danger: "#E28743",
            },
            background: {
              default: "#e28743",
              paper: "#fff",
              button: "#073050",
            },
            divider: "#116BB1",
            secondary: {
              main: "#073050",
            },
            text: {
              primary: "#073050",
              secondary: "#073050",
            },
            success: {
              main: "#073050",
            },
            info: {
              main: "#1597BB",
            },
          }
        : {
            primary: {
              main: "#073050",
            },
            secondary: {
              main: "#064663",
            },
            divider: "#E28743",
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
            success: {
              main: "#ECB365",
            },
            info: {
              main: "#aaa",
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
  // theme1.typography.caption = {
  //   fontSize: ".5rem",
  //   "@media (min-width:600px)": {
  //     fontSize: "1rem",
  //   },
  //   [theme1.breakpoints.up("md")]: {
  //     fontSize: "1.4rem",
  //   },
  // };

  const modeHandler = (value) => {
    setMode(value);
  };

  return (
    <div>
      <ThemeProvider theme={theme1}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/auth/sign-in" />}
            />

            <Route
              path="/auth/sign-in"
              exact
              element={<SignIn mode={mode} handler={modeHandler} />}
            />
            <Route
              path="/auth/sign-up"
              element={<SignUp mode={mode} handler={modeHandler} />}
            />
            <Route
              path="/chat"
              element={<Chat mode={mode} handler={modeHandler} />}
            />
          </Routes>
        </Router>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
