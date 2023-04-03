const express = require("express");

const { WishlistModel } = require("../models/wishlistModel");

const wishlistRoute = express.Router();

wishlistRoute.get("/", async (req, res) => {
  try {
    const allCart = await WishlistModel();
    res.status(200).send(allCart);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});


wishlistRoute.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const cart = await new WishlistModel(req.body);
    await cart.save();
    console.log("Data Saved", cart);
    res.status(200).send(cart);
    console.log(req.body)
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
  

module.exports = { wishlistRoute };
