import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Routes from "./routes";
import "./App.css";
import { ModalProvider } from "./store/contexts/modal";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f3f9fe", // #494e6b, #0170fe, #f3f9fe
      // light: '#4f5b62',
      // dark: '#000a12',
    },
    secondary: {
      main: "#00aeef",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "20px",
      },
    },
  },
  MuiTextField: {
    root: {
      marginBottom: 10,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
