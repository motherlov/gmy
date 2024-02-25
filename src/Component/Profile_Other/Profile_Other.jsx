import axios from 'axios'
import React from 'react'
import { useState,useEffect} from 'react'

 //const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTJlZTdmYmRhYzVhYjlkYmQyZDU2OCIsImlhdCI6MTcwODMyNDg2OSwiZXhwIjoxNzA4NDExMjY5fQ.2W0xgQ_xE-8xScAdxXqtbPlvpFD6eeoAPRZDLbSZzK4'
  //const token = "IkpXVCJ9.eyJpZCI6IjY1ZDE5OGIyYW";
 const token =localStorage.getItem('token');
console.log("token =",token);
export default function Profile_Other() {
 
  const [user,setUser] =useState('')

  const getData =()=>{
    axios.get('https://wtsacademy.dedicateddevelopers.us/api/user/profile-details', {
      headers: {Authorization: `Bearer ${token}`  }
  }

    ).then((res)=>{
        console.log(res.data)
        setUser(res.data);
    })
  }
  useEffect(()=>{
    getData()
  },[])

  console.log(user)
  return (
    <div>

<table class="table">
  <thead>
    <tr>

      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    { user.map((obj)=>(
  
    <tr>
      <td>{obj.first_name}</td>
      <td>{obj.last_name}</td>
      <td>{obj.email}</td>
    </tr>
     ))}
  </tbody>
</table>
    </div>
  )
}
