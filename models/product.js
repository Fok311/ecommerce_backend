const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// setup the schema
const productSchema = new Schema({
  name: {type: String, required: true},
  description: String,
  price: {type: String, required: true},
  category: {type: String, required: true},
});

// convert the schema to a model
const Product = model("Product", productSchema);
module.exports = Product;