const ProductSchema = require("../models/produts");

module.exports.createProduct = async (req, res) => {
  try {
    const addProduct = new ProductSchema(req.body);
    const productData = await addProduct.save();
    res.send(productData);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getAllProduct = async (req, res) => {
  try {
    const allProduct = await ProductSchema.find({});
    res.send(allProduct);
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
