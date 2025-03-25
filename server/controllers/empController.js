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


const dataSearch=async(req, res)=>{
   const {empno} = req.body; 
   const Employee = await EmpModel.find({empno:empno});
   res.send(Employee);
}

const dataDelete=async(req, res)=>{
   const {id}=req.body; 
   const Employee = await EmpModel.findByIdAndDelete(id);
   res.send("Data succesfully deleted!!!");

}
const dataEdit=async(req, res)=>{
    const {id} = req.body;
     const Employee= await EmpModel.findById(id);
    res.send(Employee);
}

const dataEditSave=async(req, res) =>{
  const {_id, empno, name,designation,salary} = req.body;
   const Employee = await EmpModel.findByIdAndUpdate(_id, {
    empno:empno,
    name:name,
    designation:designation,
    salary:salary
   });
   res.send("data aupdated Succesfully!!!");
}

module.exports={
  dataSave,
  dataDisplay,
  dataSearch,
  dataDelete,
  dataEdit,
  dataEditSave
}