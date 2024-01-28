import { createTheme } from "@mui/material";
import { veryDarkBlue } from "../../styles/variables";

 const theme = createTheme({
    palette: {
      background: {
        default: veryDarkBlue, // Color de fondo personalizado
      },
    },
});

export default theme;