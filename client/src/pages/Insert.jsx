import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd"
const Insert=()=>{
    const [input, setInput] = useState({});
    const [messageApi, contextHolder] = message.useMessage();
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    const handleSubmit=async(e)=>{
          e.preventDefault();
         let api="http://localhost:8000/employee/insert";
         const response = await axios.post(api, input);
         console.log(response.data);
         messageApi.success(response.data.msg);
    }

    return(
        <>
          <h1> Insert  Data</h1>
          <Form style={{width:"300px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Number</Form.Label>
        <Form.Control type="text" name="empno" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"  name="name" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation</Form.Label>
        <Form.Control type="text"  name="designation" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary</Form.Label>
        <Form.Control type="text"  name="salary" onChange={handleInput}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    {contextHolder}
        </>
    )
}

export default Insert;