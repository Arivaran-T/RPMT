//mui
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const mode = "dark";

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

function CustomTheme(props) {
  return <ThemeProvider theme={theme1}>{props.children}</ThemeProvider>;
}

export default CustomTheme;
