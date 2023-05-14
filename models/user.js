const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // token: { type: String },
});

// userSchema.methods.comparePassword = async function (password) {
//   return this.password == password ? true : false;
// };

// userSchema.methods.getAccessToken = function () {
//   return jwt.sign({ _id: this.id }, "mysecretkey"); //{ expiresIn: process.env.TOKEN_EXPIRES })
// };

const user = new mongoose.model("User", userSchema);

module.exports = user;
