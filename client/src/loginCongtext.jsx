import {useState, createContext } from "react";


const myContext= createContext();

const LoginContext=({children})=>{
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");

    return(
        <>
           <myContext.Provider value={{name, setName, email, setEmail}}>
              {children}
            </myContext.Provider>      
        </>
    )
}

export {myContext};
export default LoginContext;
