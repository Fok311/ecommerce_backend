const Product = require("../models/product");

const getProducts = async (category) => {
  try {
    let filters = {};
    let sortQuery = { _id: 1 };
    if (category) {
      filters.category = category;
    }
    const products = await Product.find(filters).sort(sortQuery);
    return products;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch products');
  }
};

//add
const addProduct = async (name, description, price, category) => {
    const newProduct = new Product({
        name,
        description,
        price,
        category
    });
    // save the movie with mongodb
    await newProduct.save();
    return newProduct;
};

// update
const updateProduct = async (product_id, name, description, price, category) => {
  const updatedProduct = await Product.findByIdAndUpdate(product_id, {
    name,
    description,
    price,
    category
  },
  { new: true } // send in the updated data
  );
  return updatedProduct;
};

module.exports = {
    getProducts,
  addProduct,
  updateProduct
};