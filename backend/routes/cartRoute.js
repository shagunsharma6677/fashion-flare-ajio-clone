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

cartRoute.post("/", async (req, res) => {
    const {
        src,
        brand,
        category,
        title,
        discountPrice,
        orginalPrice,
        discount,
        offer,
    } = req.body;
    try {
        const allCart = await new CartModel({src,brand,category,title,discountPrice,orginalPrice,discount,offer});
        await allCart.save()
        console.log("Data Saved")
        res.status(200).send(allCart);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

module.exports = { cartRoute };
