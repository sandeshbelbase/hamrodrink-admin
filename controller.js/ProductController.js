const express = require("express");
const app = express();
const ProductSchema = require("../models/produts");
const { baseUrl } = require("../utils/baseUrl");
app.use(express.urlencoded({ extended: true }));

module.exports.createProduct = async (req, res) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }
  try {
    console.log("req.body", req.body);
    const addProduct = new ProductSchema(req.body);
    const productData = await addProduct.save();
    res.status(200).send(productData);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getAllProduct = async (req, res) => {
  const base = baseUrl(req);

  try {
    const allProduct = await ProductSchema.find({});
    const productsWithImagePath = allProduct.map((product) => {
      return {
        ...product._doc,
        image: {
          path: `${base}/uploads/${product.image}`,
        },
      };
    });
    // const imagePath = `/uploads/${filename}`;
    res.send(productsWithImagePath);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.editProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const editProducts = await ProductSchema.findByIdAndUpdate(_id, req.body);
    res.send(editProducts);
  } catch (e) {
    res.status(400).send(e);
  }
};
module.exports.deleteProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteProducts = await ProductSchema.findByIdAndDelete({ _id });
    res.send(deleteProducts);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getSingleProduct = async (req, res) => {
  try {
    const _id = req.params.id;
    const getSingleMen = await MensRanking.findById({ _id });
    res.send(getSingleMen);
  } catch (e) {
    res.status(400).send(e);
  }
};
