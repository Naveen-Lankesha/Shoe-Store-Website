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

// all shoe list
const listShoe = async (req, res) => {
  try {
    const shoes = await shoeModel.find({}); // Fetching all shoe items from the database
    res.json({ success: true, data: shoes }); // Sending a JSON response with the list of shoe items
  } catch (error) {
    console.log(error); // Logging any error that occurred during the fetching process
    res.json({ success: false, message: "Failed to fetch shoe list" }); // Sending a JSON response indicating that the fetching failed
  }
};

//remove shoe item
const removeShoe = async (req, res) => {
  try {
    const shoe = await shoeModel.findById(req.body.id); // Finding the shoe item by ID
    const imagePath = `uploads/${shoe.image}`; // Constructing the path to the image file

    fs.unlinkSync(imagePath, () => {}); // Deleting the image file from the file system

    await shoeModel.findByIdAndDelete(req.body.id); // Removing the shoe item from the database

    res.json({ success: true, message: "Shoe removed successfully" }); // Sending a JSON response indicating that the shoe was removed successfully
  } catch (error) {
    console.log(error); // Logging any error that occurred during the removal process
    res.json({ success: false, message: "Failed to remove shoe" }); // Sending a JSON response indicating that the removal failed
  }
};

export { addShoe, listShoe, removeShoe }; // Exporting the addShoe function to make it accessible from other modules
