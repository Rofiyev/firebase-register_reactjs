import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import AppRouter from "./Components/AppRouter";
import { MyContext } from ".";
import { useAuthState } from "react-firebase-hooks/auth";
import { useContext } from "react";
import Loader from "./Components/Loader";

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  shadows: Array(25).fill("none"),
});


function App() {
  const { auth } = useContext(MyContext);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "98vh",
          bgcolor: "#fff4f180",
        }}
      >
        <CssBaseline />
        <Loader />
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "#fff4f180", minHeight: "100vh" }}>
          <CssBaseline />
          <Navbar />
          <AppRouter />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
