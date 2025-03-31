const mongoose= require("mongoose");
const empSchema= new mongoose.Schema({ 
   name:String,
   city:String, 
   email:String,
   password:String
})

module.exports = mongoose.model("employee", empSchema);