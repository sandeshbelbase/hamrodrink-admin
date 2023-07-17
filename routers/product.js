// import express from "express";
const express = require("express");
const authentication = require("../utils/auth");
const router = express.Router();
const upload = require("../utils/multer.js");

const {
  createProduct,
  getAllProduct,
  editProduct,
  deleteProduct,
} = require("../controller.js/ProductController");

router.get("/", getAllProduct);
router.post("/create", upload.single("image"), createProduct);
// authentication, this can be added when token verification is needed
router.patch("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
// router.get("/getSingleProduct/:id", getSingleProduct);

module.exports = router;
