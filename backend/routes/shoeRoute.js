import express from "express"; // Importing the express module
import {
  addShoe,
  listShoe,
  removeShoe,
} from "../controllers/shoeController.js"; // Importing the addShoe function from shoeController.js
import multer from "multer"; // Importing the multer module for handling file uploads

const shoeRouter = express.Router(); // Creating a new instance of express.Router()

// Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads", // Setting the destination folder for uploaded files
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`); // Setting the filename for uploaded files
  },
});

const upload = multer({ storage: storage }); // Creating a multer middleware for handling file uploads

shoeRouter.post("/add", upload.single("image"), addShoe); // Route handler for handling POST requests to /add endpoint
shoeRouter.get("/list", listShoe); // Route handler for handling GET requests to /list endpoint
shoeRouter.post("/remove", removeShoe); // Route handler for handling DELETE requests to /remove endpoint

export default shoeRouter; // Exporting the shoeRouter object as the default export of the module
