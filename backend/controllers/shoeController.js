import shoeModel from "../models/shoeModel.js"; // Importing the shoeModel module from the "../models/shoeModel.js" file
import fs from "fs"; // Importing the fs module for file system operations

// add shoe item
const addShoe = async (req, res) => {
  let image_filename = `${req.file.filename}`; // Extracting the filename from the uploaded file and storing it in the image_filename variable

  const shoe = new shoeModel({
    // Creating a new instance of the shoeModel class
    name: req.body.name, // Assigning the value of the "name" property from the request body to the "name" property of the shoe instance
    description: req.body.description, // Assigning the value of the "description" property from the request body to the "description" property of the shoe instance
    price: req.body.price, // Assigning the value of the "price" property from the request body to the "price" property of the shoe instance
    image: image_filename, // Assigning the value of the image_filename variable to the "image" property of the shoe instance
    category: req.body.category, // Assigning the value of the "category" property from the request body to the "category" property of the shoe instance
  });

  try {
    await shoe.save(); // Saving the shoe instance to the database
    res.json({ succes: true, message: "Shoe added successfully" }); // Sending a JSON response indicating that the shoe was added successfully
  } catch (error) {
    console.log(error); // Logging any error that occurred during the saving process
    res.json({ success: false, message: "Failed to add shoe" }); // Sending a JSON response indicating that the shoe addition failed
  }
};

export { addShoe }; // Exporting the addShoe function to make it accessible from other modules
