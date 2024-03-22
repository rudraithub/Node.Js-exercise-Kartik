const mongoose=require("mongoose")

const userschema=mongoose.Schema({
  username:String,
  name:String,
  age:Number,

});
   //mongoose.model("name",userschema)

module.exports=mongoose.model("user",userschema)   //mongoose.model("name",userschema)
// mongodb+srv://kartikdabhi:<password>@cluster0.ev8db8v.mongodb.net/