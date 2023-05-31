const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  const token = req.headers.authorization;

  console.log("tokoo", token);

  if (token) {
    const tokenHeader = token.split(" ")[1];
    if (!tokenHeader) {
      return res.send("Token is required");
    }
    try {
      req.user = jwt.verify(tokenHeader, "sandesh");
      next();
    } catch (err) {
      return res.status(400).json({ msg: "invalid token" });
    }
  } else {
    return res.send("No bearer token");
  }
};

module.exports = authentication;
