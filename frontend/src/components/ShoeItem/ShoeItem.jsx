import { Paper, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { StoreContext } from "../../context/StoreContext";

//size
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ShoeItem = ({ id, name, price, description, image }) => {
  const { size, handleChange, cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <Paper>
      <Box>
        <img
          src={url + "/images/" + image}
          alt=" "
          style={{ width: "100%", height: "auto" }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {!cartItems[id] ? (
            <AddCircleOutlineOutlinedIcon onClick={() => addToCart(id)} />
          ) : (
            <Box sx={{ display: "flex" }}>
              <RemoveCircleOutlineRoundedIcon
                onClick={() => {
                  if (cartItems[id] > 4) {
                    removeFromCart(id);
                  }
                }}
                style={{
                  color: cartItems[id] <= 4 ? "grey" : "red",
                  pointerEvents: cartItems[id] <= 4 ? "none" : "auto",
                }}
              />
              <Typography sx={{ pl: 1, pr: 1 }}>{cartItems[id]}</Typography>
              <AddCircleOutlineOutlinedIcon
                onClick={() => {
                  if (cartItems[id] < 13) {
                    addToCart(id);
                  }
                }}
                style={{
                  color: cartItems[id] >= 13 ? "grey" : "green",
                  pointerEvents: cartItems[id] >= 13 ? "none" : "auto",
                }}
              />
            </Box>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <FormControl sx={{ mt: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Size</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={size[id] || ""}
              onChange={(event) => handleChange(id, event)}
              autoWidth
              label="Size">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        <h3>{name}</h3>
        <p>{description}</p>
        <Typography variant="h6" sx={{ color: "#FD7401" }}>
          £{price}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ShoeItem;
