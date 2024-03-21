
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
  Ranking: {
    type: Number,
    require: true,
    unique: true,
  },
  name:{
    type:String,
    require:true,
    trim:true
  },
  dob:{
    type:Date,
    require:true,
    trim:true
  },
  Countr:{
    type:String,
    require:true,
    trim:true
  },
  score:{
    type:Number,
    require:true,
    trim:true
  },
  event:{
    type:String,
    default:"100m"
  }
});


const MensRanking=new mongoose.model("MensRanking",menSchema)

module.exports=MensRanking;