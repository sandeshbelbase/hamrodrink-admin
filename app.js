const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");

app.use("/uploads", express.static("uploads"));

// defining routes
const product = require("./routers/product");
const user = require("./routers/user");

// const cookieParser = require("cookie-parser");
//console.log(new mongoose.Types.ObjectId())

const PORT = 5000;
app.use(cors({}));

// FOR PARSING THE REQUEST DATA
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTING
app.use("/product", product);
app.use("/user", user);

app.listen(PORT, () => {
  console.log("server is starting on port number %d", PORT);
});
