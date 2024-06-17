import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import shoeRouter from "./routes/shoeRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import "dotenv/config";

//-----------db pw: 26268
//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

// API endpoints
app.use("/api/shoe", shoeRouter);
app.use("/images", express.static("uploads")); // Serving the uploaded images from the "uploads" folder by mounting the "/images" route to the "uploads" folder using express.static middleware
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

//listen
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// mongodb+srv://lankesha:26268@cluster0.nnacnu2.mongodb.net/?
