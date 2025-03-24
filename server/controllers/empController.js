const EmpModel= require("../models/empModel");



const dataSave=async(req, res)=>{
   const {empno, name, designation, salary} = req.body;
   const Employee = await EmpModel.create({ 
    empno:empno,
    name:name,
    designation:designation, 
    salary:salary
   })
   res.send({msg:"Data Suceefully Inserted!!!"});
}

const dataDisplay=async(req, res)=>{
    const Employee= await EmpModel.find();
    res.send(Employee);
}

module.exports={
  dataSave,
  dataDisplay
}