import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";

const App = () => {
  return (
    <div>
      <Navbar />
      <Box display={"flex"}>
        <Sidebar />
        <Routes>
          <Route path={"/add"} element={<Add />} />
          <Route path={"/List"} element={<List />} />
          <Route path={"/orders"} element={<Order />} />
        </Routes>
      </Box>
    </div>
  );
};

export default App;
