import { Stack, Box, TextField, Typography, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, shoe_list, cartItems, url } =
    useContext(StoreContext);

  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    shoe_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    //console.log(orderItems);
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    //call API
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
      //alert("Order Placed Successfully");
    } else {
      alert("Order Failed");
    }
  };

  return (
    <form onSubmit={placeOrder}>
      <Stack
        display={"flex"}
        direction={{ sm: "column", md: "row" }}
        spacing={10}
        sx={{ p: 8 }}>
        <Stack flex={1} id="info" spacing={2}>
          <Typography sx={{ fontWeight: "bold" }}>
            Delivery Information
          </Typography>
          <Stack display={"flex"} direction={"row"} spacing={2}>
            <TextField
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              flex={1}
              label="Full Name"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              flex={1}
              label="Last Name"
              variant="outlined"
              size="small"
              required
            />
          </Stack>
          <TextField
            name="email"
            onChange={handleChange}
            value={data.email}
            label="Email Address"
            variant="outlined"
            size="small"
            required
          />
          <TextField
            name="street"
            onChange={handleChange}
            value={data.street}
            label="Street"
            variant="outlined"
            size="small"
            required
          />
          <Stack direction={"row"} spacing={2}>
            <TextField
              name="city"
              onChange={handleChange}
              value={data.city}
              label="City"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              name="state"
              onChange={handleChange}
              value={data.state}
              label="State"
              variant="outlined"
              size="small"
              required
            />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <TextField
              name="zipCode"
              onChange={handleChange}
              value={data.zipCode}
              label="Zip Code"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              name="country"
              onChange={handleChange}
              value={data.country}
              label="Country"
              variant="outlined"
              size="small"
              required
            />
          </Stack>
          <TextField
            name="phone"
            onChange={handleChange}
            value={data.phone}
            label="Phone Number"
            variant="outlined"
            size="small"
            required
          />
        </Stack>

        <Stack flex={1} id="Totals">
          <Box>
            <Typography fontWeight={"bold"} sx={{ mb: 2 }}>
              Cart Total
            </Typography>

            <Stack display={"flex"} flexDirection={"row"}>
              <Stack flex={1}>
                <Typography>Sub Total</Typography>
                <Typography>Delivery Fee</Typography>
                <Typography sx={{ fontWeight: "bold" }}>Total</Typography>
              </Stack>
              <Stack flex={1}>
                <Typography id="Sub_Total">£{getTotalCartAmount()}</Typography>
                <Typography id="Delivery_Free">
                  £{getTotalCartAmount() === 0 ? 0 : 2}
                </Typography>
                <Typography id="Total" sx={{ fontWeight: "bold" }}>
                  £{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained">
              PROCEED TO CHECKOUT
            </Button>
          </Box>
        </Stack>
      </Stack>
    </form>
  );
};

export default PlaceOrder;
