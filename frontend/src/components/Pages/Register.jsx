import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './register.css'


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
    <div className="container">
      <h1 className="header">Register</h1>
      <form  className="form" onSubmit={handleSubmit}>

        <label className="form-field">
        Name
        <input 
         type="text"
         requried 
         value={name}
         onChange={(e) => setName(e.target.value)}
         placeholder="Please enter name"
         />
        </label>

        <label className="form-field">
        Email
        <input 
         type="email" 
         value={email}
         requried 
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Please enter email"
         />
        </label>

        <label className="form-field password-field">
        Password
        <input
         type="password"
         requried 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         placeholder="Please enter password"
         />
         
        </label>
        <button className="button">Register</button>
        
      </form>
    </div>
  )
}