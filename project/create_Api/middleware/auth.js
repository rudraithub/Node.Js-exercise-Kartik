// authMiddleware.js

const jwt = require("jsonwebtoken");
const Usermodel = require("../model/detalis");



async function verifyToken(req, res, next) {
  const token = req.header("authorization").replace("Bearer ", "");
    console.log("Token",token)
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, "defaultSecretKey");
    const user = await Usermodel.findOne({ _id: decoded.userId });
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = verifyToken;
