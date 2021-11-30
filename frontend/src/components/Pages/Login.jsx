
// import styles from "../../styles.css"
import { Link } from 'react-router-dom';
import { useContext, useState } from "react"
import axios from "axios";
import { dataContext } from '../../Hooks/ContextProvider';
import "./login.css"
import { Form } from 'react-bootstrap';



function LogIn() {
  const { navigate } = useContext(dataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/users/login', {
      email: email,
      password: password
    }).then(res => {
      const user = res.data
      console.log('user:', user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('username', user.name);

      navigate('/Dashboard')

    }).catch((error) => {
      console.error("error -->", error)
    })
  }
  return(
  // <div className="container">
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <h1 className="header">Please log in</h1> 
  //         <input
  //           type="email"
  //           value={email}
  //           required
  //           placeholder="Email"
  //           onChange={(e) =>{
  //             console.log(e.target.value)
  //               setEmail(e.target.value)}}
  //         />
  //         <input
  //           type="password"
  //           value={password}
  //           required
  //           placeholder="Password"
  //           onChange={(e) => setPassword(e.target.value)}
  //         />
  //         <button className="button">Log In</button>
  //     </form>
  //     <Link to="/Register">Click Me To Create Account</Link>

  //   </div>
  // </div>
<div>
  <Form className="login" onSubmit={handleSubmit}>
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

  <div className="enter">
    <button type="submit">
      Submit
    </button>
    <Link to="/Register">
      <span>Click To Register</span>
      </Link>
  </div>
</Form>
</div>

  );
};


export default LogIn;