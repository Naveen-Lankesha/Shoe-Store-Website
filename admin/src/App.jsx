import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Box, Stack } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";

import { orange } from "@mui/material/colors";

//theme imports
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#FCA054",
    },
  },
  typography: {
    fontFamily: "Public Sans, sans-serif",
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box display={"flex"}>
        <Box flex={1}>
          <Sidebar />
        </Box>
        <Box flex={4}>
          <Routes>
            <Route path={"/add"} element={<Add />} />
            <Route path={"/List"} element={<List />} />
            <Route path={"/orders"} element={<Order />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
