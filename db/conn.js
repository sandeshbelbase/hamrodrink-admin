import dotenv from "dotenv";
const mongoose = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((e) => {
    console.log("no connection", e.message || e);
  });
