
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useState,  useEffect } from "react";

const EditData=()=>{
    const {id} = useParams();
    const [mydata, setMydata] = useState({});

    const loadData=async ()=>{
        let api="http://localhost:8000/employee/editdata";
        const response = await axios.post(api, {id:id});
        console.log(response.data);
        setMydata(response.data);
    }

   useEffect(()=>{
    loadData();
   }, [])


   const handleInput=(e)=>{
     let name= e.target.name;
     let value= e.target.value ;
      setMydata(values=>({...values, [name]:value}));
      console.log(mydata);
   }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    let api="http://localhost:8000/employee/editdatasave";
    const response= await axios.post(api, mydata);
    alert("data succesfully updated!!!");
  }

    return(
        <>
         <h1> Edit Employee Record:</h1>
         <Form style={{width:"300px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Empno</Form.Label>
        <Form.Control type="text" name="empno" value={mydata.empno}
        onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Name</Form.Label>
        <Form.Control type="text" name="name" value={mydata.name} 
         onChange={handleInput}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Designation</Form.Label>
        <Form.Control type="text" name="designation" value={mydata.designation}  onChange={handleInput}    />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Salary</Form.Label>
        <Form.Control type="text" name="salary"  value={mydata.salary} 
         onChange={handleInput}  />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default EditData;