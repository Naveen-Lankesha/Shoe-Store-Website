import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Set the selected item based on the current route
    if (window.location.pathname === "/add") {
      setSelected("add");
    } else if (window.location.pathname === "/list") {
      setSelected("list");
    } else if (window.location.pathname === "/orders") {
      setSelected("orders");
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "100vh",
        width: "250px",
        position: "fixed",
      }}>
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

//previous version of Sidebar.jsx

// import React, { useState, useEffect, useMemo } from "react";
// import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import { NavLink } from "react-router-dom";
// import { orange } from "@mui/material/colors";

// const Sidebar = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));
//   const [selected, setSelected] = useState("add");

//   const handleSelect = (item) => {
//     setSelected(item);
//   };

//   useEffect(() => {
//     // Prevent the sidebar from scrolling
//     //document.body.style.overflow = "hidden";

//     // Set the selected item based on the current route
//     if (window.location.pathname === "/add") {
//       setSelected("add");
//     } else if (window.location.pathname === "/list") {
//       setSelected("list");
//     } else if (window.location.pathname === "/orders") {
//       setSelected("orders");
//     }
//   }, []);

//   return (
//     <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
//       <Stack display={"flex"} flexDirection={"column"}>
//         <NavLink to={"/add"} style={{ textDecoration: "none" }}>
//           <Stack
//             display={"flex"}
//             flexDirection={"row"}
//             sx={{
//               p: 2,
//               cursor: "pointer",
//               backgroundColor: selected === "add" ? orange[500] : "transparent",
//             }}
//             onClick={() => handleSelect("add")}>
//             <AddCircleIcon />
//             {isLargeScreen && (
//               <Typography sx={{ color: "black", pl: 1 }}>Add Items</Typography>
//             )}
//           </Stack>
//         </NavLink>
//         <NavLink to={"/list"} style={{ textDecoration: "none" }}>
//           <Stack
//             display={"flex"}
//             flexDirection={"row"}
//             sx={{
//               p: 2,
//               cursor: "pointer",
//               backgroundColor:
//                 selected === "list" ? orange[500] : "transparent",
//             }}
//             onClick={() => handleSelect("list")}>
//             <FormatListBulletedIcon />
//             {isLargeScreen && (
//               <Typography sx={{ color: "black", pl: 1 }}>List Items</Typography>
//             )}
//           </Stack>
//         </NavLink>
//         <NavLink to={"/orders"} style={{ textDecoration: "none" }}>
//           <Stack
//             display={"flex"}
//             flexDirection={"row"}
//             sx={{
//               p: 2,
//               cursor: "pointer",
//               backgroundColor:
//                 selected === "orders" ? orange[500] : "transparent",
//             }}
//             onClick={() => handleSelect("orders")}>
//             <LocalShippingIcon />
//             {isLargeScreen && (
//               <Typography sx={{ color: "black", pl: 1 }}>Orders</Typography>
//             )}
//           </Stack>
//         </NavLink>
//       </Stack>
//     </Box>
//   );
// };

// export default Sidebar;
