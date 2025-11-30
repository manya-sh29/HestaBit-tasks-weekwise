import mongoose from "mongoose";
import UserRepository from "./src/repositories/user.repository.js";
import ProductRepository from "./src/repositories/product.repository.js";

// ------------------ Connect to MongoDB ------------------
const DB_URI = "mongodb://127.0.0.1:27017/mydb2"; 
mongoose
  .connect(DB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// ------------------ User Tests ------------------
async function testUserRepo() {
  console.log("----- User Repository Tests -----");

  // Create a user
  const user = await UserRepository.create({
    firstName: "Manya",
    lastName: "Sharma",
    email: "ms@example.com",
    password: "123456",
  });
  console.log("Created User:", user);

  // Find all users (paginated)
  const { users, total } = await UserRepository.findPaginated(1, 5);
  console.log("Users:", users, "Total:", total);

  // Find by ID
  const foundUser = await UserRepository.findById(user._id);
  console.log("Found User by ID:", foundUser);

  // Update user
  const updatedUser = await UserRepository.update(user._id, { firstName: "Updated" });
  console.log("Updated User:", updatedUser);

  // Delete user
  const deletedUser = await UserRepository.delete(user._id);
  console.log("Deleted User:", deletedUser);
}

// ------------------ Product Tests ------------------
async function testProductRepo() {
  console.log("----- Product Repository Tests -----");

  // Create a product
  const product = await ProductRepository.create({
    name: "Laptop",
    price: 50000,
    discount: 10,
    status: "in-stock",
  });
  console.log("Created Product:", product);

  // Find all products (paginated)
  const { products, total } = await ProductRepository.findPaginated(1, 5);
  console.log("Products:", products, "Total:", total);

  // Find by ID
  const foundProduct = await ProductRepository.findById(product._id);
  console.log("Found Product by ID:", foundProduct);

  // Update product
  const updatedProduct = await ProductRepository.update(product._id, { price: 45000 });
  console.log("Updated Product:", updatedProduct);

  // Delete product
  const deletedProduct = await ProductRepository.delete(product._id);
  console.log("Deleted Product:", deletedProduct);
}

// ------------------ Run All Tests ------------------
async function runTests() {
  await testUserRepo();
  await testProductRepo();
  mongoose.connection.close(); 
}

runTests();
