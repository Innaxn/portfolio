import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        /* Custom scrollbars for WebKit browsers */
        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: #f0f0f0;
        }

        ::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        /* Custom scrollbars for Firefox */
        html {
          scrollbar-width: thin;
          scrollbar-color: #888 #f0f0f0;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: "#d0c672",
    },
    secondary: {
      main: "#fdebc1",
    },
    text: {
      primary: "#2b270a",
      secondary: "#7a7a31",
    },
    // #fdebc1 - light yellow
    // #d0c672 - dark yellow
    // #7a7a31 - dark green
    // #2b270a - dark brown
    // #5b2c0b - brown
  },
  typography: {
    fontFamily: "Lusitana, serif",
    h1: {
      fontSize: "60px",
      "@media (max-width:600px)": {
        fontSize: "40px",
      },
    },
    h2: {
      fontSize: "56px",
      "@media (max-width:600px)": {
        fontSize: "36px",
      },
    },
    h3: {
      fontSize: "52px",
      "@media (max-width:600px)": {
        fontSize: "32px",
      },
    },
    h4: {
      fontSize: "32px",
      "@media (max-width:600px)": {
        fontSize: "24px",
      },
    },
    h5: {
      fontSize: "26px",
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
    },
    body1: {
      fontSize: "24px",
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
    },
    body2: {
      fontSize: "18px",
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
    },
  },
});

export default theme;
