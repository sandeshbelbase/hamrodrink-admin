import express from "express";
const router = express.Router();

const {
  createProduct,
  getAllProduct,
  editProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller.js/ProductController");

router.get("/", getAllProduct);
router.post("/create", createProduct);
router.patch("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/getSingleProduct/:id", getSingleProduct);

module.exports = router;
