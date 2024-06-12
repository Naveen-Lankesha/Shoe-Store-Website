import * as React from "react";
import { Link } from "react-router-dom"; // Add this import statement
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { assets } from "../../assets/frontend_assets/assets";
import { Stack } from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export default function ButtonAppBar({ setShowLogin }) {
  const [activeButton, setActiveButton] = React.useState("Home");

  const handleHomeClick = () => {
    const menuElement = document.getElementById("home");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleMenuClick = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContactClick = () => {
    const menuElement = document.getElementById("footer");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={1}
        sx={{
          background: "black",
        }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component="div"
            sx={{
              ml: 4,
            }}>
            <img
              onClick={() => (window.location.href = "/")}
              src={assets.cloudlogo}
              style={{ maxHeight: 50 }}
            />
          </IconButton>
          <Stack
            direction={"row"}
            sx={{ flexGrow: 1, justifyContent: "center" }}>
            <Link to="/">
              <Button
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                  },
                  textDecoration:
                    activeButton === "Home" ? "underline" : "none",
                  textDecorationThickness:
                    activeButton === "Home" ? "3px" : "0",
                }}
                onClick={() => {
                  handleHomeClick();
                  setActiveButton("Home");
                }}>
                Home
              </Button>
            </Link>
            <Link to="/#menu">
              <Button
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                    textDecorationThickness: "1px",
                  },
                  textDecoration:
                    activeButton === "Menu" ? "underline" : "none",
                  textDecorationThickness:
                    activeButton === "Menu" ? "3px" : "0",
                }}
                onClick={() => {
                  setActiveButton("Menu");
                  handleMenuClick();
                }}>
                Brands
              </Button>
            </Link>
            <Button
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                },
                textDecoration:
                  activeButton === "Contact Us" ? "underline" : "none",
                textDecorationThickness:
                  activeButton === "Contact Us" ? "3px" : "0",
              }}
              onClick={() => {
                setActiveButton("Contact Us");
                handleContactClick();
              }}>
              Contact Us
            </Button>
          </Stack>
          <Link to="/cart">
            <ShoppingCartOutlinedIcon
              sx={{ color: "#FD7401", mr: 4 }}
              // onClick={() => {
              //   window.location.href = "/cart";
              // }}
            />
          </Link>
          <Button
            variant="outlined"
            sx={{ borderRadius: 5, mr: 5 }}
            onClick={() => {
              setShowLogin(true);
            }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
