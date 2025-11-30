import logger from "../utils/logger.js";
import ProductRepository from "../repositories/product.repository.js";

// ---------------------- CREATE PRODUCT ----------------------
export const createProduct = async (req, res, next) => {
  try {
    const product = await ProductRepository.create(req.body);
    logger.info("Product created successfully");
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    logger.error("Error creating product: " + error.message);
    next(error);
  }
};

// ---------------------- GET ALL PRODUCTS ----------------------
export const getAllProducts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { products, total } = await ProductRepository.findPaginated(page, limit);
    res.status(200).json({ success: true, data: products, total, page, limit });
  } catch (error) {
    logger.error("Error getting products: " + error.message);
    next(error);
  }
};

// ---------------------- GET PRODUCT BY ID ----------------------
export const getProductById = async (req, res, next) => {
  try {
    const product = await ProductRepository.findById(req.params.id);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    logger.error("Error fetching product: " + error.message);
    next(error);
  }
};

// ---------------------- UPDATE PRODUCT ----------------------
export const updateProduct = async (req, res, next) => {
  try {
    const product = await ProductRepository.update(req.params.id, req.body);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    logger.error("Error updating product: " + error.message);
    next(error);
  }
};

// ---------------------- DELETE PRODUCT ----------------------
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await ProductRepository.delete(req.params.id);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    logger.error("Error deleting product: " + error.message);
    next(error);
  }
};
