const EmpModel= require("../models/empModel");


const empRegistration=async(req, res)=>{
   const {name, city, email, password} = req.body;
   const Employee = await EmpModel.create({
      name:name,
      city:city, 
      email:email,
      password:password

   })
      
      res.send({msg:"You are succesfully registered!!!"});
}

const empLogin=async(req, res)=>{
   const {email, password} = req.body;
    try {
      const Employee = await EmpModel.findOne({email:email});
      if (!Employee)
      {
        res.status(400).send({msg:"Invalid Email!"})
      }
      if (Employee.password!=password)
      {
        res.status(400).send({msg:"Invalid Password!"});
      }
      res.status(200).send({msg:"Login Succesfull", Employee:Employee}); 
    
   }catch (error) {
        console.log(error);
    }
}

module.exports={
   empRegistration,
   empLogin
}