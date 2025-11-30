import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [1, "Price must be greater than 0"],
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 90,
    },
    status: {
      type: String,
      enum: ["in-stock", "out-of-stock"],
      default: "in-stock",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// 🔹 Virtual Field → discounted price
productSchema.virtual("discountedPrice").get(function () {
  return this.price - (this.price * this.discount) / 100;
});

// 🔹 Compound Index
productSchema.index({ status: 1, createdAt: -1 });

export default mongoose.model("Product", productSchema);
