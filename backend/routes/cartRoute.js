const express = require("express");
const { CartModel } = require("../models/cartModel");
const cartRoute = express.Router();
// get route to get all data
cartRoute.get("/", async (req, res) => {
  try {
    const allCart = await CartModel.find();
    res.status(200).send(allCart);
  } catch (err) {
    // console.log(err);
    res.send(err);
  }
});

// post route to post data to cart
cartRoute.post("/add", async (req, res) => {
  const { _id,...payload } = req.body;
  try {
    console.log("body",req.body);
    let check = await CartModel.findOne(req.body);
    console.log("checked",check)
    if (!check) {
      const cart = await new CartModel(payload);
      await cart.save();
      console.log(Date.now(), cart);
      res.status(200).send(cart);
    }

    // console.log(req.body)
  } catch (err) {
    // console.log(err);
    res.send(err);
  }
});
//delete route to delete data from cart
cartRoute.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.body);
    await CartModel.findByIdAndDelete({ _id: id });
    // console.log("Data Deleted",);
    res.status(200).send("cart item deleted");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// patch route to update cart data
cartRoute.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    await CartModel.findByIdAndUpdate({ _id: id }, payload);
    res.status(200).send("cart item updated");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

cartRoute.delete("/empty", async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    await CartModel.deleteMany({});
    res.status(200).send("cat data empty");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = { cartRoute };
