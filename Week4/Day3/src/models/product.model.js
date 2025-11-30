import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      trim: true,
    },
    brand: {
      type: String,
      trim: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    deletedAt: {
      type: Date,
      default: null, // null means not deleted
    },
  },
  { timestamps: true } // createdAt, updatedAt automatically
);

// Optional: Add index for faster search on name & brand
productSchema.index({ name: "text", brand: "text" });

export default mongoose.model("Product", productSchema);
