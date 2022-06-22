import React, { useEffect, useState } from 'react'
import './StudentData.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

function StudentData() {

    const [data,setData] = useState([])
    console.log(data)

    const fetch_student = () => {   
      axios.get("http://localhost:5051/api/data/getstudent").then((res) => {
          setData(res.data.student)

      })
  }
  useEffect(() => {
      fetch_student()
  }, [])
  return (
    <div style={{margin:"50px"}}>
    <Link to="/">
    <button type="logout" > Logout</button>

    </Link>
        <h2 style={{textAlign:"center"}}>Student-Record</h2>
        <Link to="/home" >
        <button type="submit" > Add Student</button>

        </Link>
<table id="student">
  <tr>
    <th>name</th>
    <th>age</th>
    <th>class</th>
  </tr>

  {data.map((ele)=>{
    return(
      <tr>
      
    <td>{ele.name}</td>
    <td>{ele.age} </td>
    <td>{ele.class}</td>
  </tr>
    )
    })
  }
  

 
</table>
    </div>
  )
}

export default StudentData