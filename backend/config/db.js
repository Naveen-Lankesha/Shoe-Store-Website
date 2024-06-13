import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://lankesha:26268@cluster0.nnacnu2.mongodb.net/online-shop-store"
    )
    .then(() => console.log("connected to db"));
};
