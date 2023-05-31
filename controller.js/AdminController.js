const user = require("../models/user");
const jwt = require("jsonwebtoken");
const login = require("../models/user");

const express = require("express");

module.exports.loginUser = async (req, res) => {
  const { username, password } = req?.body;

  const userDetail = await login.findOne({
    username: username,
  });

  console.log("ddddd", req.body);

  if (!userDetail) {
    return res.status(400).send("invalid username");
  }

  if (userDetail?.password == password) {
    const token = jwt.sign({ userDetail }, "sandesh");
    return res.send(token).status(200);
  }
};
