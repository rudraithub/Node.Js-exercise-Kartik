const express = require("express");
const router = express.Router();
const Usermodel = require("../model/detalis");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken = require("../ganerateAuth");
const verifyToken = require("../middleware/auth");

router.post("/profile", async (req, res) => {
  try {
    const user = new Usermodel(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (err) {
    console.error(err.message);
    res.status(400).send("Failed to save user profile");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user1 = await Usermodel.findOne({ email });
    if (!user1) {
      return res.status(400).send("Invalid email");
    }
    const match = await bcrypt.compare(password, user1.password);
    if (!match) {
      return res.status(400).send("Invalid password");
    }
    const token = generateToken(user1._id);
    console.log("Token is:", token);
      user1.tokens = user1.tokens.concat({ token });
        await user1.save()
        console.log(token);
        res.send({ token});
   
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

// const ganerateAuth = async (id) => {
//   const token = jwt.sign({id}, "hellomyname")
//   // console.log('Generated Token:', token)
//   return token
// }
// router file

router.get("/token", verifyToken, async (req, res) => {
  try {
    const _id = req.user._id;
    // const isValidObjectId = mongoose.isValidObjectId(_id);
    // if (!isValidObjectId) {
    //     return res.status(400).json({ error: 'Invalid user ID' });
    // }

    const nameuser = await Usermodel.findById(_id);
    if (!nameuser) {
      throw new Error("User not found");
    }
    res.send(nameuser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
