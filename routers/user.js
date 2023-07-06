const express = require("express");
const router = express.Router();

const { loginUser } = require("../controller.js/AdminController");

router.post("/login", loginUser);

module.exports = router;
