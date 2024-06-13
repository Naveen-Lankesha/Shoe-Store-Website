import express from "express";
import { addShoe } from "../controllers/shoeController.js";
import multer from "multer";

const shoeRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

shoeRouter.post("/add", upload.single("image"), addShoe);

export default shoeRouter;
