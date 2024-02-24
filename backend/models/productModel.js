const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  name: String,
  brand: String,
  description: String,
  price: Number,
  onSale: Boolean,
  sale: Number,
  category: String,
  gender: String,
  subCategory: String,
  image: [String],
  size: [String],
  options: [Object],
  isActive: { type: Boolean, default: false },
  newArrival: { type: Boolean, default: false },
});

const Producto = mongoose.model("Products", productoSchema);

module.exports = Producto;
