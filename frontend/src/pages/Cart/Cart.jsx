import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Box, Typography } from "@mui/material";

const Cart = () => {
  const { shoe_list, cartItems, removeFromCart } = useContext(StoreContext);
  return (
    <div>
      <Box>
        <Typography>Items</Typography>
        <Typography>Title</Typography>
        <Typography>Price</Typography>
        <Typography>Quantity</Typography>
        <Typography>Total</Typography>
        <Typography>Remove</Typography>
      </Box>
      <hr />
      <Typography>123</Typography>
      <Box>
        {shoe_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <Box>
                <img src={item.image} alt={item.name} />
                <Typography>{item.name}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>{item.price}</Typography>
                <Typography>{cartItems[item._id]}</Typography>
                <Typography>{item.price * cartItems[item._id]}</Typography>
              </Box>
            );
          }
        })}
      </Box>
    </div>
  );
};

export default Cart;
