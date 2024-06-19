import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";

import { orange } from "@mui/material/colors";

// Theme imports
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Notification imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const url = "http://localhost:4000";
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <ToastContainer />
      <Box display={"flex"}>
        <Box
          sx={{
            mt: "60px", // Adjust for Navbar height
            height: "calc(100vh - 64px)", // Adjust for Navbar height
          }}>
          <Sidebar />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            ml: "250px", // Adjust for Sidebar width
            mt: "64px", // Adjust for Navbar height
            overflow: "auto",
            height: "calc(100vh - 64px)", // Adjust for Navbar height
          }}>
          <Routes>
            <Route path={"/add"} element={<Add url={url} />} />
            <Route path={"/List"} element={<List url={url} />} />
            <Route path={"/orders"} element={<Order url={url} />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;

// previous version of App.jsx

// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import { Box, Stack } from "@mui/material";
// import Sidebar from "./components/Sidebar/Sidebar";
// import { Route, Routes } from "react-router-dom";
// import Add from "./pages/Add/Add";
// import List from "./pages/List/List";
// import Order from "./pages/Order/Order";

// import { orange } from "@mui/material/colors";

// //theme imports
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// //notification imports
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Create a custom theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: orange[500],
//     },
//     secondary: {
//       main: "#FCA054",
//     },
//   },
//   typography: {
//     fontFamily: "Public Sans, sans-serif",
//     h1: {
//       fontWeight: 600,
//     },
//     h2: {
//       fontWeight: 600,
//     },
//   },
// });

// const App = () => {
//   const url = "http://localhost:4000";
//   return (
//     <ThemeProvider theme={theme}>
//       <Navbar />
//       <ToastContainer />
//       <Box display={"flex"}>
//         <Box flex={1}>
//           <Sidebar />
//         </Box>
//         <Box flex={4}>
//           <Routes>
//             <Route path={"/add"} element={<Add url={url} />} />
//             <Route path={"/List"} element={<List url={url} />} />
//             <Route path={"/orders"} element={<Order url={url} />} />
//           </Routes>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

// export default App;
