const express = require("express");
const { WishlistModel } = require("../models/wishlistModel");
const wishlistRoute = express.Router();
// get route to get all data 
wishlistRoute.get("/", async (req, res) => {
  try {
    const allCart = await WishlistModel.find();
    console.log(allCart);
    res.status(200).send(allCart);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
// post route to post data to wishlist
wishlistRoute.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const cart = await new WishlistModel(req.body);
    await cart.save();
    console.log("Data Saved", cart);
    res.status(200).send(cart);
    console.log(req.body);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// delete route to delete data from wishlist
wishlistRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    await WishlistModel.findByIdAndDelete({ _id: id });
    res.status(200).send("product deleted");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = { wishlistRoute };
