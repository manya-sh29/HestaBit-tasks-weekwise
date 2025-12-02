// src/controllers/product.controller.js

// Create a new product
export const createProduct = (req, res) => {
  try {
    const { title, price, category } = req.validated.body;

    res.status(201).json({
      message: "Product created successfully",
      data: { title, price, category },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all products
export const getAllProducts = (req, res) => {  // renamed from getProducts
  try {
    res.status(200).json({
      message: "Products fetched successfully",
      data: [{ title: "Sample Product", price: 100, category: "Sample" }],
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get product by ID
export const getProductById = (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      message: `Product ${id} fetched successfully`,
      data: { title: "Sample Product", price: 100, category: "Sample" },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a product by ID
export const updateProduct = (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, category } = req.validated.body;

    res.status(200).json({
      message: `Product ${id} updated successfully`,
      data: { title, price, category },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a product by ID
export const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      message: `Product ${id} deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
