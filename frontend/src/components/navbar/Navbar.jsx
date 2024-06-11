import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { assets } from "../../assets/frontend_assets/assets";
import { Stack } from "@mui/material";

export default function ButtonAppBar() {
  const [activeButton, setActiveButton] = React.useState("Home");

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
            <img src={assets.cloudlogo} style={{ maxHeight: 50 }} />
          </IconButton>
          <Stack
            direction={"row"}
            sx={{ flexGrow: 1, justifyContent: "center" }}>
            <Button
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                },
                textDecoration: activeButton === "Home" ? "underline" : "none",
                textDecorationThickness: activeButton === "Home" ? "3px" : "0",
              }}
              onClick={() => setActiveButton("Home")}>
              Home
            </Button>
            <Button
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationThickness: "1px",
                },
                textDecoration: activeButton === "Menu" ? "underline" : "none",
                textDecorationThickness: activeButton === "Menu" ? "3px" : "0",
              }}
              onClick={() => setActiveButton("Menu")}>
              Menu
            </Button>
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
              onClick={() => setActiveButton("Contact Us")}>
              Contact Us
            </Button>
          </Stack>
          <Button variant="outlined" sx={{ borderRadius: 5, mr: 5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
