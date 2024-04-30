const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// create the express app
const app = express();

// middleware to handle JSON request
app.use(express.json());

// setup a cors policy
const corsHandler = cors({
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: true,
  optionsSuccessStatus: 200,
});

// apply the cors to middleware
app.use(corsHandler);


// connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// Routes
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");

app.use("/products", productRouter);
app.use("/category", categoryRouter);

// Start the server
app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
