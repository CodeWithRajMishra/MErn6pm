const EmpModel= require("../models/empModel");
const bcrypt = require('bcrypt');
const jwt= require("jsonwebtoken");
const empRegistration=async(req, res)=>{
   const { name, city, email, password}=req.body;
   try {
      const saltRounds = 10; // 10 rounds is the default
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const Employee= await EmpModel.create({
         name:name,
         city:city, 
         email:email,
         password:hashedPassword
      })
       res.send({msg:"You are succesfully Registered!!!"});
   } catch (error) {
        console.log(error);
   }    
}

const empLogin=async(req, res)=>{
   const {email, password} = req.body;
   try {
        const Employee = await EmpModel.findOne({email:email});
        if (!Employee)
        {
         res.status(400).send({msg:"Invalid Email"});
        }
        const passwordMatch = await bcrypt.compare(password, Employee.password);
        if(!passwordMatch)
        {
         res.status(400).send("Pasword dose not match!");
        }
       
     const token= await jwt.sign({id:Employee._id}, process.env.SECRETE_KEY, { expiresIn: "1d" } )
     console.log(token); 
     res.status(200).send({token:token});
   } catch (error) {
      console.log(error);
   }
    
}

module.exports={
   empRegistration,
   empLogin
}