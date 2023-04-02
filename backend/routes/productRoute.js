const express = require("express");
const { ProductModel } = require("../models/productModel");

const productRoute = express.Router();

//Get All Product
//Get By Category

productRoute.get("/:category", async (req, res) => {
    const param = req.params
  try {
    const allProduct = await ProductModel.find(param);
    // console.log("AllProduct", allProduct);
    if (allProduct) {
      res.status(200).send(allProduct);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//Single Product

productRoute.get("/:category/:_id", async (req, res) => {
    const param = req.params
  try {
    const allProduct = await ProductModel.find(param);
    // console.log("AllProduct", allProduct);
    if (allProduct) {
      res.status(200).send(allProduct);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = { productRoute };
