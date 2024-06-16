import mongoose from "mongoose";

const shoeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

// The expression mongoose.models.shoe is checking if there is already a model named "shoe" defined in the mongoose.models object. If such a model exists, it will be assigned to shoeModel.
const shoeModel = mongoose.models.shoe || mongoose.model("shoe", shoeSchema);

export default shoeModel;
