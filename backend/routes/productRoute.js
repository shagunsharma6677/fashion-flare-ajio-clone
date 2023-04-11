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

// post function
productRoute.patch("/update/:_id", async (req, res) => {
  const {_id} = req.params
  // console.log("param",param)
  const payload = req.body
try {
  const singleProduct = await ProductModel.findByIdAndUpdate({_id:_id},payload);
  console.log(singleProduct)
    res.status(200).send(singleProduct);
  
} catch (err) {
  res.status(400).send(err);
}
});

productRoute.delete("/delete/:_id", async (req, res) => {
  const {_id} = req.params
  // console.log("param",param)
try {
  const singleProduct = await ProductModel.findByIdAndDelete({_id:_id});
  console.log(singleProduct)
    res.status(200).send(singleProduct);
  
} catch (err) {
  res.status(400).send(err);
}
});

productRoute.post("/add", async (req, res) => {
  try {
    // console.log(req.body);
    const cart = await new ProductModel(req.body);
    await cart.save();
    console.log("Data Saved", cart);
    res.status(200).send(cart);
    console.log(req.body)
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
//Single Product

productRoute.get("/:category/:_id", async (req, res) => {
    const param = req.params
    console.log("param",param)
  try {
    const singleProduct = await ProductModel.find(param);
    // console.log("AllProduct", allProduct);
    // console.log(singleProduct)
    if (singleProduct) {
      res.status(200).send(singleProduct[0]);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = { productRoute };
