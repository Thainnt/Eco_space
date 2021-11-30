import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './login.css'
import { Form } from "react-bootstrap"



export default function Register(props) {
  const [name, setName ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
      axios.post('/api/users/register',{
      name:name,
      email:email,
      password:password
    }).then(res => {
      const user = res.data
      console.log("Register data",res.data,res.data.name);
      Cookies.set("username", user.name)
      navigate('/Dashboard');
    }).catch(err => {
      console.log(err);
    })
    }
    
  

  return (
    <div>
  <Form className="login" onSubmit={handleSubmit}>

  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control
    type="text" 
    placeholder="First name"
    value={name}
    onChange={(e) => setName(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control 
    type="email" 
    placeholder="Enter email"
    value={email}
    onChange={(e) =>{setEmail(e.target.value)}}
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>


    <button type="submit">
      Register
    </button>
</Form>
</div>
  )
}