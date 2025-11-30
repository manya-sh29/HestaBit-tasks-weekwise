import logger from "../utils/logger.js";
import UserRepository from "../repositories/user.repository.js";

// ---------------------- CREATE USER ----------------------
export const createUser = async (req, res, next) => {
  try {
    const user = await UserRepository.create(req.body);
    logger.info("User created successfully");
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    logger.error("Error creating user: " + error.message);
    next(error);
  }
};

// ---------------------- GET ALL USERS ----------------------
export const getAllUsers = async (req, res, next) => {
  try {
    // Optional: add pagination query params
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const { users, total } = await UserRepository.findPaginated(page, limit);
    res.status(200).json({ success: true, data: users, total, page, limit });
  } catch (error) {
    logger.error("Error getting users: " + error.message);
    next(error);
  }
};

// ---------------------- GET USER BY ID ----------------------
export const getUserById = async (req, res, next) => {
  try {
    const user = await UserRepository.findById(req.params.id);
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    logger.error("Error fetching user: " + error.message);
    next(error);
  }
};

// ---------------------- UPDATE USER ----------------------
export const updateUser = async (req, res, next) => {
  try {
    const user = await UserRepository.update(req.params.id, req.body);
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    logger.error("Error updating user: " + error.message);
    next(error);
  }
};

// ---------------------- DELETE USER ----------------------
export const deleteUser = async (req, res, next) => {
  try {
    const user = await UserRepository.delete(req.params.id);
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    logger.error("Error deleting user: " + error.message);
    next(error);
  }
};
