import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

//import { shoe_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [shoe_list, setShoeList] = useState([]);

  const [cartItems, setCartItems] = useState({});
  const [size, setSize] = useState({}); // Update the initial state to be an object

  const handleChange = async (id, event) => {
    setSize((prevSize) => ({ ...prevSize, [id]: event.target.value }));
    if (token) {
      await axios.post(
        url + "/api/cart/updateShoeSize",
        { itemId: id, size: event.target.value },
        { headers: { token } }
      );
    }
  };

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      let itemInfo = shoe_list.find((product) => product._id === item);
      totalAmount += itemInfo.price * cartItems[item];
    }
    return totalAmount;
  };

  // fetch data from backend
  const fetchShoeList = async () => {
    const response = await axios.get(`${url}/api/shoe/list`);
    setShoeList(response.data.data);
  };

  //to keep the items in the cart after refresh
  const loadCartData = async (token) => {
    const response = await axios.post(
      `${url}/api/cart/get`,
      {},
      {
        headers: { token },
      }
    );
    setCartItems(response.data.cartData);
  };

  //to keep the shoeSize in the cart after refresh
  const loadShoeSize = async (token) => {
    const response = await axios.post(
      `${url}/api/cart/getShoeSize`,
      {},
      {
        headers: { token },
      }
    );
    setSize(response.data.shoeSize);
  };

  //prevet refresh logout
  useEffect(() => {
    async function fetchData() {
      await fetchShoeList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token")); //to keep the items in the cart after refresh
        await loadShoeSize(localStorage.getItem("token")); //to keep the shoeSize in the cart after refresh
      }
    }
    fetchData();
  }, []);

  const contextValue = {
    size,
    handleChange,
    shoe_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

// import React, { createContext, useEffect, useState } from "react";

// import { shoe_list } from "../assets/frontend_assets/assets";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [size, setSize] = React.useState({});

//   const handleChange = (event) => {
//     setSize(event.target.value);
//   };

//   const addToCart = (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   useEffect(() => {
//     console.log(cartItems);
//   }, [cartItems]);

//   const contextValue = {
//     size,
//     handleChange,
//     shoe_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;
