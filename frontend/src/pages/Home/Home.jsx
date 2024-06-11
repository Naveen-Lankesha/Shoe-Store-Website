import React from "react";
import Header from "../../components/header/Header";
import { Box } from "@mui/material";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import ShoeDisplay from "../../components/ShoeDisplay/ShoeDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div id="home">
      <Box
        sx={{
          backgroundImage: "linear-gradient(180deg , #000000 , #FD7401 )",
          pt: 1,
        }}>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
      </Box>
      <Box sx={{ pr: 8, pl: 8 }}>
        <ShoeDisplay category={category} />
      </Box>
    </div>
  );
};

export default Home;
