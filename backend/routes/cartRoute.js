const express = require("express");
const { CartModel } = require("../models/cartModel");

const cartRoute = express.Router();

cartRoute.get("/", async (req, res) => {
  try {
    const allCart = await CartModel();
    res.status(200).send(allCart);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});


cartRoute.post("/add", async (req, res) => {
  try {
    // console.log(req.body);
    const cart = await new CartModel(req.body);
    await cart.save();
    console.log("Data Saved", cart);
    res.status(200).send(cart);
    console.log(req.body)
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
  

module.exports = { cartRoute };
