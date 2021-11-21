import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


export default function Register(props) {
  const [name, setName ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function validate() {

  }

  function handleSubmit(event) {
    event.preventDefault();

   
      axios.put('http://localhost:8080/api/users',{
      name:name,
      email:email,
      password:password
    }).then(res => {
      console.log(res.data);
      navigate('/');
    }).catch(err => {
      console.log(err);
    })
    }
    
  

  return (
    <div>
      <form onSubmit={handleSubmit}>

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