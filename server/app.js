const express = require("express");
const app=express();
const cors= require("cors");
const bodyparser = require('body-parser')
const empRoute= require("./routes/empRoute");
const mongoose= require("mongoose");
// Body-parser middleware
mongoose.connect("mongodb://127.0.0.1:27017/devcrud").then(()=>{
    console.log("DB Successfully connected!!!");
})
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());
app.use("/employee", empRoute);
app.listen(8000, ()=>{
    console.log("server run on 8000 port!");
})