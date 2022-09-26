import React,{useEffect, useState} from 'react'
import { Container, Table } from 'react-bootstrap'
import { db } from '../../firebase'

function Users() {
  const[userData,setUserData] = useState([])

  useEffect(()=>{
  // Getting users data from firebase
  db.collection("users").get().then(data =>{
    if(data.docs.length > 0){
      data.docs.forEach(dataList =>{
        setUserData(prev =>{
          return [...prev,dataList.data()]
        })
      })
    }
  })
},[])

  console.log(userData)
  return (
    <Container>
        <h1>Users Info</h1>

        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Email ID</th>
          <th>Password</th>
          <th>Signup Time</th>
          <th>IP</th>
        </tr>
      </thead>
      <tbody>
        {
          userData.map(users =>{
            return(
              <tr>
              <td>{users.email}</td>
              <td>{users.password}</td>
              <td>{users.signupTime}</td>
              <td>{users.IP}</td>
            </tr>      
            )
          })
        }
      </tbody>
    </Table>

    </Container>
  )
}

export default Users