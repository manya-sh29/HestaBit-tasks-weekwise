import * as productService from "../services/product.service.js";

// GET /products
export const getProducts = async (req, res, next) => {
  try {
    const data = await productService.getProducts(req.query);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// DELETE /products/:id (Soft Delete)
export const deleteProduct = async (req, res, next) => {
  try {
    const data = await productService.softDeleteProduct(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
