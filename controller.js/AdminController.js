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
    return res.status(200).send("login success");
  }
};
