const mongoose= require("mongoose");
const empSchema= new mongoose.Schema({ 
   empno:String,
   name:String,
   designation:String, 
   salary:Number
})
module.exports = mongoose.model("employee", empSchema);