import * as React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Stack,
  Dialog,
  DialogActions,
} from "@mui/material";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ButtonAppBar({ setShowLogin }) {
  const [activeButton, setActiveButton] = useState("Home");
  const [openDialog, setOpenDialog] = useState(false);
  const { getTotalCartAmount, token, setToken, shopItems } =
    useContext(StoreContext);

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

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    handleDialogClose();
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed" // Changed to 'fixed'
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
            <Stack direction={"row-reverse"}>
              {getTotalCartAmount() > 0 ? (
                <FiberManualRecordIcon
                  sx={{
                    color: "green",
                    fontSize: "small",
                  }}
                />
              ) : null}

              <ShoppingCartOutlinedIcon sx={{ color: "#FD7401" }} />
            </Stack>
          </Link>
          {!token ? (
            <Button
              variant="outlined"
              sx={{ borderRadius: 5, mr: 5, ml: 4 }}
              onClick={() => {
                setShowLogin(true);
              }}>
              Login
            </Button>
          ) : (
            <div style={{ marginRight: 50, marginLeft: 40 }}>
              <img
                onClick={handleDialogOpen}
                src={assets.profile_icon}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        PaperProps={{
          style: {
            position: "absolute",
            top: "70px",
            right: "90px",
            margin: 0,
            maxHeight: "90vh",
          },
        }}>
        <DialogActions>
          <Stack>
            <Button
              onClick={() => (navigate("/myorders"), handleDialogClose())}
              color="primary">
              Orders
            </Button>
            <Button onClick={handleLogout} color="primary">
              Logout
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
