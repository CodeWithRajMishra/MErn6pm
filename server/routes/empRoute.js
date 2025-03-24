const express= require("express");
const route= express.Router();
const EmpController= require("../controllers/empController");

route.post("/insert", EmpController.dataSave);
route.get("/display", EmpController.dataDisplay);


module.exports=route;