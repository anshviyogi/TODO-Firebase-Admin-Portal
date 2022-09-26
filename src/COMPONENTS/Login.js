import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux'
import { addUser } from '../REDUX/userAction'
import { useNavigate } from 'react-router-dom'

function Login() {
  // Static login id/password
  const userId = "admin"
  const adminPassword = "admin"

const navigate = useNavigate()
const[userName,setUsername] = useState('')
const[password,setPassword] = useState('')

  function loginHandler(){
    if(userName === userId && password === adminPassword){
      navigate('/dashboard')
    }
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Backend Page</h1>

<Container>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Id</Form.Label>
        <Form.Control type="text" placeholder="Enter your user id" onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="**********" onChange={e => setPassword(e.target.value)}/>
      </Form.Group>

      <div className="d-grid gap-2">
      <Button variant="primary" size="sm" onClick={loginHandler}>
        Login
      </Button>
    </div>


</Container>
    </div>
  )
}

export default Login