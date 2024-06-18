import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import Loading from "./Loading";
import { Box } from "@mui/material";

const Verify = () => {
  // get url params
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  // verify payment using API
  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      //navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  console.log(success, orderId);

  return (
    <Box
      sx={{ width: "100%", height: 500 }}
      display="flex"
      justifyContent="center"
      alignItems="center">
      <Loading />
    </Box>
  );
};

export default Verify;
