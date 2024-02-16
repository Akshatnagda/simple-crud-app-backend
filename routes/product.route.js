const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts); // GET all Products

router.get("/:id", getProduct); // GET a Single Product

router.post("/", createProduct); // POST Products

router.put("/:id", updateProduct); // UPDATE a Product

router.delete("/:id", deleteProduct); // DELETE a Product

module.exports = router;
