import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Create a new product
router.post("/", createProduct);

// Get all products
router.get("/", getAllProducts);

// Get product by ID
router.get("/:id", getProductById);

// Update product by ID
router.put("/:id", updateProduct);

// Delete product by ID
router.delete("/:id", deleteProduct);

// Default export to use in app.js
export default router;
