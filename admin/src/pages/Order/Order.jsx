import React from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Paper, Stack, Typography, Box } from "@mui/material";
import { assets } from "../../assets/assets";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Failed to fetch orders");
    }
  };

  //status handler
  const statusHander = async (event, orderId) => {
    //console.log(event, OrderId);
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value,
    });
    if (response.data.success) {
      await fetchOrders();
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  return (
    <Box sx={{ p: 8 }}>
      <Typography variant="h4">Orders</Typography>
      <Stack spacing={2}>
        {orders.map((order, index) => (
          <Paper sx={{ p: 2 }} key={index}>
            <Stack
              spacing={3}
              display={"flex"}
              direction={{ sm: "column", md: "row" }}>
              <Box flex={1}>
                <img src={assets.parcel_icon} alt="product" />
              </Box>

              <Box flex={2}>
                <Typography sx={{ fontWeight: 600 }}>
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return (
                        item.name +
                        " (" +
                        item.description +
                        ") x " +
                        item.quantity
                      );
                    } else {
                      return (
                        item.name +
                        " (" +
                        item.description +
                        ") x " +
                        item.quantity +
                        ", "
                      );
                    }
                  })}
                </Typography>
              </Box>
              <Stack flex={2}>
                <Typography sx={{ fontWeight: 600 }}>
                  {order.address.firstName} {order.address.lastName}
                </Typography>
                <Typography>{order.address.street},</Typography>
                <Typography>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}
                </Typography>
                <Typography>{order.address.zipCode}</Typography>
                <Typography>{order.address.phone}</Typography>
              </Stack>

              <Typography flex={0.5} sx={{ color: "orange" }}>
                £{order.amount}
              </Typography>
              <Box flex={1}>
                <select
                  onChange={(event) => statusHander(event, order._id)}
                  value={order.status}>
                  <option value="Shoe processing">Shoe processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </Box>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Order;
