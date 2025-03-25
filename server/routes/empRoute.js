const express= require("express");
const route= express.Router();
const EmpController= require("../controllers/empController");

route.post("/insert", EmpController.dataSave);
route.get("/display", EmpController.dataDisplay);
route.post("/search", EmpController.dataSearch);
route.post("/delete", EmpController.dataDelete);
route.post("/editdata", EmpController.dataEdit);
route.post("/editdatasave", EmpController.dataEditSave);

module.exports=route;