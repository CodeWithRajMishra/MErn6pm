import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

const Search=()=>{
  const [empno, setEmpno]= useState("");
  const [mydata, setMydata] = useState([]);

  const handleSubmit=async()=>{
    let api="http://localhost:8000/employee/search";
    const response = await axios.post(api, {empno:empno});
    console.log(response.data);
    setMydata(response.data)
  }

const ans= mydata.map((key)=>{
    return(
      <>
        <tr>
          <td> {key.empno} </td>
          <td> {key.name} </td>
          <td> {key.designation} </td>
          <td> {key.salary} </td>
        </tr>
      </>
    )
})
    return(
        <>
          <h1> Search Data</h1>
          Enter Employee no : <input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
          <button onClick={handleSubmit}>Search</button>

          <hr />

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Empno#</th>
          <th> Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
         {ans}
        </tbody>
        </Table>

        </>
    )
}

export default Search;