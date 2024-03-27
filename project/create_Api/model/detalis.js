const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt=require("bcrypt")
const generateToken=require("../router/index")
// const express  = require("express");
// const jwt = require('jsonwebtoken');
// const securitKey = "securitkey";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("invalid Email");
      }
    },
  },
  password: {
    type: String,
    require: true,
    unique: true,
    validate(value) {
      if (!validator.isStrongPassword(value)) {
        throw new Error("enter propre password");
      }
    },
  },
  tokens: [{
    token:{
      type:String,
      require:true
    }
  }]
});


// create new model or collections
userSchema.pre('save', async function (next) {
  const user2 = this;
  if (user2.isModified('password')) {
      user2.password = await bcrypt.hash(user2.password, 10);
  }
  next();
});





const Usermodel = mongoose.model("user", userSchema);

module.exports = Usermodel;