// src/controllers/user.controller.js

// Create a new user
export const createUser = (req, res) => {
  try {
    const { name, email, password } = req.validated.body;

    res.status(201).json({
      message: "User created successfully",
      data: { name, email },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all users
export const getAllUsers = (req, res) => {
  try {
    res.status(200).json({
      message: "Users fetched successfully",
      data: [{ name: "Manya", email: "manya@example.com" }],
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get user by ID
export const getUserById = (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      message: `User ${id} fetched successfully`,
      data: { name: "Manya", email: "manya@example.com" },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a user by ID
export const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.validated.body;

    res.status(200).json({
      message: `User ${id} updated successfully`,
      data: { name, email },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Delete a user by ID
export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      message: `User ${id} deleted successfully`,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
