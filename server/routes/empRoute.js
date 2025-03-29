const express= require("express");
const route= express.Router();
const EmpController= require("../controllers/empController");

route.post("/registration", EmpController.empRegistration);
route.post("/login", EmpController.empLogin);

module.exports=route;