const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  src: { type: String },
  brand: { type: String },
  category: { type: String },
  title: { type: String },
  discountPrice: { type: String },
  orginalPrice: { type: String },
  discount: { type: String },
  offer: { type: String },
});

const WishlistModel = mongoose.model("wishlist", wishlistSchema);

module.exports = { WishlistModel };
