const express = require("express");
const app=express();
const cors= require("cors");
const bodyparser = require('body-parser')
const mongoose= require("mongoose");
const EmpRoute= require("./routes/empRoute");
require("dotenv").config();
// Body-parser middleware
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Successfully connected!!!");
})
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());


app.use("/employee", EmpRoute);




const port=process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server run on Port ${port}`);
})