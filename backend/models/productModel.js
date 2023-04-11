const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  src: String,
  brand: String,
  category: String,
  title: String,
  discountPrice: String,
  orginalPrice: String,
  discount: String,
  offer: String,
  genre: [String],
  rating: String,
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
