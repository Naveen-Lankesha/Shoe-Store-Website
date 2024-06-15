import React, { useState } from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { NavLink } from "react-router-dom";
import { orange } from "@mui/material/colors";

const Sidebar = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [selected, setSelected] = useState("add");

  const handleSelect = (item) => {
    setSelected(item);
  };

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Stack display={"flex"} flexDirection={"column"}>
        <NavLink to={"/add"} style={{ textDecoration: "none" }}>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            sx={{
              p: 2,
              cursor: "pointer",
              backgroundColor: selected === "add" ? orange[500] : "transparent",
            }}
            onClick={() => handleSelect("add")}>
            <AddCircleIcon />
            {isLargeScreen && (
              <Typography sx={{ color: "black", pl: 1 }}>Add Items</Typography>
            )}
          </Stack>
        </NavLink>
        <NavLink to={"/list"} style={{ textDecoration: "none" }}>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            sx={{
              p: 2,
              cursor: "pointer",
              backgroundColor:
                selected === "list" ? orange[500] : "transparent",
            }}
            onClick={() => handleSelect("list")}>
            <FormatListBulletedIcon />
            {isLargeScreen && (
              <Typography sx={{ color: "black", pl: 1 }}>List Items</Typography>
            )}
          </Stack>
        </NavLink>
        <NavLink to={"/orders"} style={{ textDecoration: "none" }}>
          <Stack
            display={"flex"}
            flexDirection={"row"}
            sx={{
              p: 2,
              cursor: "pointer",
              backgroundColor:
                selected === "orders" ? orange[500] : "transparent",
            }}
            onClick={() => handleSelect("orders")}>
            <LocalShippingIcon />
            {isLargeScreen && (
              <Typography sx={{ color: "black", pl: 1 }}>Orders</Typography>
            )}
          </Stack>
        </NavLink>
      </Stack>
    </Box>
  );
};

export default Sidebar;
