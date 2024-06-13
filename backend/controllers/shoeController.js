import shoeModel from "../models/shoeModel.js";
import fs from "fs";

// add shoe item
const addShoe = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const shoe = new shoeModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  });

  try {
    await shoe.save();
    res.json({ succes: true, message: "Shoe added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add shoe" });
  }
};
export { addShoe };
