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

  // const formStyles = {
  //   color: "blue"
  // }

  function handleSubmit(event) {
    event.preventDefault();
      
   
      axios.post('http://localhost:8080/api/users/register',{
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
      <form className="form" onSubmit={handleSubmit}>

        <label>
        Name:
        <input 
         type="text"
         requried 
         value={name}
         onChange={(e) => setName(e.target.value)}
         />
        </label>

        <label>
        Email:
        <input 
         type="email" 
         value={email}
         requried 
         onChange={(e) => setEmail(e.target.value)}
         />
        </label>

        <label>
        Password: 
        <input
         type="password"
         requried 
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
        </label>
        <button>Register</button>
    
       

        
      </form>
    </div>
  )
}