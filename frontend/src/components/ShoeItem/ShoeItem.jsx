import { Paper, Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import { StoreContext } from "../../context/StoreContext";

const ShoeItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <Paper>
      <Box>
        <img src={image} alt=" " style={{ width: "100%", height: "auto" }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {!cartItems[id] ? (
            <AddCircleOutlineOutlinedIcon onClick={() => addToCart(id)} />
          ) : (
            <Box sx={{ display: "flex" }}>
              <RemoveCircleOutlineRoundedIcon
                onClick={() => removeFromCart(id)}
                style={{ color: "red" }}
              />
              <Typography sx={{ pl: 1, pr: 1 }}>{cartItems[id]}</Typography>
              <AddCircleOutlineOutlinedIcon
                onClick={() => addToCart(id)}
                style={{ color: "green" }}
              />
            </Box>
          )}
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
