
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {useNavigate} from "react-router-dom";
const Login=()=>{
    const [input, setInput] = useState({});
    const navigate = useNavigate();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
        let api="http://localhost:8000/employee/login";
        const response= await axios.post(api, input);
        console.log(response.data)        
        localStorage.setItem("token", response.data.token);
        navigate("/");
        } catch (error) {
          alert(error.response.data.msg);
        }
    }
    return(
        <>
         <h1> User Registration</h1>
                   <Form style={{width:"300px"}}>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email"  name="email" onChange={handleInput} />
               </Form.Group>
               <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password"  name="password" onChange={handleInput} />
               </Form.Group>
               <Button variant="primary" type="submit" onClick={handleSubmit}>
                 Submit
               </Button>
             </Form>
             <ToastContainer/>
        </>
    )
}
export default Login;