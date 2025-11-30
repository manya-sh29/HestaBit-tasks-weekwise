import Product from "../models/product.model.js";
import ApiError from "../errors/ApiError.js";

// GET PRODUCTS
export const getProducts = async (queryParams) => {
  const { search, includeDeleted, sort, page = 1, limit = 10, ...filters } = queryParams;

  const query = {};

  // SOFT DELETE
  if (!includeDeleted || includeDeleted === "false") {
    query.deletedAt = null;
  }

  // DYNAMIC SEARCH
  if (search) {
    const searchTerms = search.split("|").map(term => term.trim());
    query.$or = searchTerms.map(term => ({
      name: { $regex: term, $options: "i" }
    }));
  }

  // FILTERING
  Object.keys(filters).forEach((key) => {
    if (typeof filters[key] === "object") return;
    query[key] = filters[key];
  });

  // RANGE FILTERS
  const rangeFields = ["price", "stock"];
  rangeFields.forEach((field) => {
    if (queryParams[field + "[gte]"]) {
      query[field] = { ...query[field], $gte: Number(queryParams[field + "[gte]"]) };
    }
    if (queryParams[field + "[lte]"]) {
      query[field] = { ...query[field], $lte: Number(queryParams[field + "[lte]"]) };
    }
  });

  // SORTING
  let sortBy = {};
  if (sort) {
    const fields = sort.split(",");
    fields.forEach(f => {
      if (f.startsWith("-")) {
        sortBy[f.substring(1)] = -1;
      } else {
        sortBy[f] = 1;
      }
    });
  }

  // PAGINATION
  const skip = (Number(page) - 1) * Number(limit);
  const products = await Product.find(query)
    .sort(sortBy)
    .skip(skip)
    .limit(Number(limit));

  const total = await Product.countDocuments(query);

  return {
    success: true,
    total,
    page: Number(page),
    limit: Number(limit),
    data: products,
  };
};

// SOFT DELETE
export const softDeleteProduct = async (id) => {
  const product = await Product.findById(id);
  if (!product) throw ApiError.notFound("Product not found");

  product.deletedAt = new Date();
  await product.save();

  return {
    success: true,
    message: "Product soft deleted successfully",
    data: product,
  };
};
