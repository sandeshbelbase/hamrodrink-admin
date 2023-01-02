const user = require("../models/user");
const jwt = require("jsonwebtoken");
const login = require("../models/user");

module.exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  const userDetail = await login.findOne({
    username: username,
    password: password,
  });

  console.log("de", userDetail);

  if (username == "" && password == "")
    return res
      .status(404)
      .json({ status: false, msg: "non valid credentials" });
  console.log("user", user);

  if (!userDetail)
    return res.status(400).json({ status: false, msg: "No user found" });
  // const valid = await userDetail[0].comparePassword(password);

  // console.log("hello", req.body);
  // const mensData = await addMen.save();
  // res.send(mensData);
  const token = userDetail.getAccessToken();
  return res.json({ status: 200, msg: "login done", token });

  // try {
  //   const userLogin = new user(req.body);
  //   const userData = await userLogin.save();
  //   res.send(userData);
  // } catch (e) {
  //   res.status(400).send(e);
  // }
};
