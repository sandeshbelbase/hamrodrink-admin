import express from "express";
const router = express.Router();
require("./db/conn");

const app = express();
const port = process.env.PORT || 5000;

const product = require("./routers/product");
const user = require("./routers/user");

app.use(express.json());

app.use(router);
const cors = require("cors");
app.use(cors({}));

require("dotenv").config();

// defing routes

app.use("/product", product);
app.use("/user", user);

app.listen(port, () => {
  console.log("go live");
});
