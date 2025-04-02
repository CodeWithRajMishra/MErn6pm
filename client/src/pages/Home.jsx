import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { myContext } from "../loginCongtext";
const Home=()=>{
 
  const {name, setName, email, setEmail} = useContext(myContext);

  const authUser=async()=>{
      const token= localStorage.getItem("token");
      if (token)
        {
          let api="http://localhost:8000/employee/authuser";
          const response= await axios.get(api, {headers:{autherization:token}});
          console.log(response.data);
          localStorage.setItem("username", response.data.name);
          localStorage.setItem("useremail", response.data.email);
          localStorage.setItem("userid", response.data._id);
          setName(response.data.name);
          setEmail(response.data.email);

        }  
  }

  useEffect(()=>{
     authUser();
  })


  return(
        <>
          <h1> Welcome To Home Page</h1>
        </>
    )
}

export default Home;