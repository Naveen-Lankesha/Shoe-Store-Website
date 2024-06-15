import { Box, Paper, Stack } from "@mui/material";
import React from "react";

import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <Paper elevation={8} sx={{ backgroundColor: "black", borderRadius: 0 }}>
      <Stack
        display={"flex"}
        flexDirection={"row"}
        sx={{ pt: 1, pb: 1, pl: 8, pr: 8 }}>
        <Box flex={1}>
          <img
            src={assets.logo}
            alt={"logo"}
            style={{ maxHeight: 40, cursor: "pointer" }}
          />
        </Box>
        <Stack display={"flex"} flex={1} flexDirection={"row-reverse"}>
          <Box>
            <img
              src={assets.profile_image}
              alt={"profile"}
              style={{ maxHeight: 40, cursor: "pointer" }}
            />
          </Box>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Navbar;
