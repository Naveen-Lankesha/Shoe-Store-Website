import {
  Box,
  Stack,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { assets } from "../../assets/assets";

const Add = () => {
  const [category, setCategory] = useState("");

  const selectHandler = (event) => {
    setCategory(event.target.value);
  };

  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  // API call
  const url = "http://localhost:4000";
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);

    const response = await axios.post(`${url}/api/shoe/add`, formData);
    if (response.data.success) {
      setData({ name: "", description: "", category: "", price: "" });
      setImage(false);
    } else {
    }
  };

  return (
    <Box sx={{ p: 8 }}>
      <Stack spacing={3}>
        <Box>
          <Typography sx={{ color: "grey" }}>Upload Image</Typography>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              style={{ cursor: "pointer", maxWidth: 300 }}
              alt="upload"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            style={{ display: "none" }}
          />
        </Box>
        <TextField
          onChange={onChangeHandler}
          value={data.name}
          label="Product Name"
          name="name"
          required
        />
        <TextField
          onChange={onChangeHandler}
          value={data.description}
          name="description"
          label="Product Description"
          required
          multiline
          rows={4}
          defaultValue=""
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category *</InputLabel>
          <Select
            onChange={onChangeHandler}
            name="category"
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Category">
            <MenuItem value="Nike">Nike</MenuItem>
            <MenuItem value="Adidas">Adidas</MenuItem>
            <MenuItem value="Puma">Puma</MenuItem>
            <MenuItem value="Reebok">Reebok</MenuItem>
          </Select>
        </FormControl>
        <TextField
          onChange={onChangeHandler}
          name="price"
          value={data.price}
          label="Product Price (£)"
          required
        />

        <form onSubmit={onSubmitHandler}>
          <Button type="submit" variant="contained" sx={{ fontWeight: 600 }}>
            Add
          </Button>
        </form>
      </Stack>
    </Box>
  );
};

export default Add;
