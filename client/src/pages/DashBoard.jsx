import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DashBoard=()=>{
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.clear();
         navigate("/");
    }
    useEffect(()=>{
        if (!localStorage.getItem("username"))
        {
            navigate("/");
        }
    }, []);
    return(
        <>
           <h1> User DashBoard</h1>
           <div style={{padding:"10px", backgroundColor:"lightblue", textAlign:"right", fontWeight:"bold", color:"navy"}}>
            Welcome : {localStorage.getItem("username")} Email: {localStorage.getItem("useremail")}
            <button onClick={logout}>Logout</button>
            </div>        
        </>
    )
}

export default DashBoard;