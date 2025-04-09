import React from 'react'
import { Form, Button, Container, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {
  
  const navigate = useNavigate()
  const loginUser=(e)=>{
    e.preventDefault()
    // console.log("login user function issue")
    setAuthenticate(true)
    navigate('/')
  }
  return (
      <Container className='login-form-container'>
        <Form onSubmit={(e)=>loginUser(e)} className='login-form-area mt-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
      </Form>
     </Container>

  )
}

export default Login