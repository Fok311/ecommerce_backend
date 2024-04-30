const express = require("express");

// create express router for movies
const router = express.Router();

// load all the models
const Product = require("../models/product");


router.get("/", async (req, res) => {
    let category = [];
      // load all the movies to extract genre out of it
    const products = await Product.find();
    
  
    // extract genre from movies
    products.forEach((product) => {
      // if is not available, then only add into genres
      if (!category.includes(product.category)) {
        category.push(product.category);
      }
    });
    res.status(200).send(category);
});
  

module.exports = router;