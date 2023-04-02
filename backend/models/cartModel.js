const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  src: String,
  brand: String,
  category: String,
  title: String,
  discountPrice: String,
  orginalPrice: String,
  discount: String,
  offer: String
});

const CartModel = mongoose.model("cart", cartSchema);

module.exports = { CartModel };