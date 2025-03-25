import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import editimg from "../images/edit.png";
import delimg from "../images/delete.png";
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();
    const loadData= async()=>{
        let api="http://localhost:8000/employee/display";
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, []);
    

    const myDel=async(id)=>{
      let api="http://localhost:8000/employee/delete";
      const response = await axios.post(api, {id:id});
       alert("record Deleted!!!");
       loadData();
    }

    const myEdit=async(id)=>{
       navigate(`/editdata/${id}`);
    }

    const ans= mydata.map((key)=>{
         return(
            <>
              <tr>
                <td> {key.empno} </td>
                <td> {key.name} </td>
                <td> {key.designation} </td>
                <td> {key.salary} </td>
                <td>
                  <a href="#" onClick={()=>{myEdit(key._id)}}>
                  <img src={editimg} width="40" height="40" />
                  </a>
                </td>
                <td>
                <a href="#" onClick={()=>{myDel(key._id)}}>
                  <img src={delimg} width="40" height="40" />
                  </a>
                </td>
              </tr> 
            </>
         )
    })




    return(
        <>
          <h1> Display Data</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#Empno</th>
          <th> Name</th>
          <th>Designation</th>
          <th>Salary</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
       {ans}
      </tbody>
      </Table>
        </>
    )
}

export default Update;