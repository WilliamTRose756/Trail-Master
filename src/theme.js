import { createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#344966",
      light: "#607494",
      dark: "#06223b",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#e84855",
      light: "#ff7c81",
      dark: "#b0002c",
      contrastText: "#000000",
    },
  },
});
