import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { Button, Paper, Typography } from "@mui/material";
import { assets } from "../../assets/frontend_assets/assets";
import { Box, Stack } from "@mui/system";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setdata] = useState({});

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      {
        headers: { token },
      }
    );
    setdata(response.data.data);
    //console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <Box sx={{ p: 8 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, pb: 4 }}>
        My Orders
      </Typography>
      <Stack spacing={2} direction={"column"} display={"flex"}>
        {Array.isArray(data) &&
          data.map((order, index) => {
            return (
              <Paper>
                <div key={index}>
                  <Stack
                    spacing={2}
                    direction={{ xs: "column", sm: "row" }}
                    display={"flex"}
                    alignItems="center">
                    <Box flex={1} sx={{ pl: 2 }}>
                      <img src={assets.parcel_icon} alt="parcel" />
                    </Box>
                    <Typography flex={1}>
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
                    <Typography flex={1}>Total: £{order.amount}.00</Typography>
                    {/* <Typography>Items: {order.items.length}</Typography> */}
                    <Typography flex={1}>
                      <span>&#x25cf;</span>
                      <b>{order.status}</b>
                    </Typography>
                    <Box flex={1}>
                      <Button onClick={fetchOrders}>Track Order</Button>
                    </Box>
                  </Stack>
                </div>
              </Paper>
            );
          })}
      </Stack>
    </Box>
  );
};

export default MyOrders;
