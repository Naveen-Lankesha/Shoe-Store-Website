import React, { useState } from "react"; // Import the useState hook

import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <Box sx={{ p: 2 }}>
      <Stack direction={"row"}>
        <h2 style={{ cursor: "pointer", marginBottom: 20 }}>{currState}</h2>
        <CloseIcon
          onClick={() => {
            setShowLogin(false);
          }}
          style={{ position: "absolute", top: 1, right: 1, cursor: "pointer" }}
        />
      </Stack>
      <div>
        <Stack>
          {currState === "Login" ? null : (
            <TextField
              required
              id="outlined-required"
              label="Your Name"
              defaultValue=""
              sx={{ pb: 2 }}
            />
          )}

          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            sx={{ pb: 2 }}
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            sx={{ pb: 2 }}
          />
          <Button sx={{ p: 1, mb: 2 }} variant="contained">
            <Typography sx={{ fontWeight: 600 }}>
              {currState === "Sign Up" ? "Create Account" : "Login"}
            </Typography>
          </Button>
          <Box>
            {currState === "Login" ? (
              <Typography>
                Creat a new account ?{" "}
                <span
                  onClick={() => setCurrState("Sign Up")}
                  style={{ color: "#FD7401", cursor: "pointer" }}>
                  Click here
                </span>
              </Typography>
            ) : (
              <Typography>
                Already have an account ?{" "}
                <span
                  onClick={() => setCurrState("Login")}
                  style={{ color: "#FD7401", cursor: "pointer" }}>
                  Login here
                </span>
              </Typography>
            )}
          </Box>
        </Stack>
      </div>
    </Box>
  );
};

export default LoginPopUp;
