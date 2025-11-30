import express from "express";
import { getProducts, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

// ------------------ GET ALL PRODUCTS ------------------
router.get("/products", getProducts);

// ------------------ SOFT DELETE PRODUCT ------------------
router.delete("/products/:id", deleteProduct);

export default router;
