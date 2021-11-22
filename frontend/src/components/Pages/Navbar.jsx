import { Routes, Route, Link } from "react-router-dom";
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom';
import styles from "../../styles.css"
import axios from "axios";


const Nav = (props) => {
  const navigate = useNavigate()
  const { loggedInUserName } = props;

  const handleClick = () => {
    localStorage.removeItem("username");
    axios.post("/api/users/logout")
      .then(response => {
        navigate("/")
      })
  }
  return (
    <nav class='navbar'>
      <h2>Eco Space</h2>
      
      <ul>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/FreeCycle">Free Goods</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        {loggedInUserName.length > 0 ? (
          <>
            <li>{loggedInUserName}</li>
            <button onClick={handleClick}>Log Out </button> 
          </>
        ):(
          <>
            <li>
              <Link to="/Login">Log In</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </>
        )}
      <Routes>
        <Route exact path="/store" element={<li> CART </li>} />
      </Routes>
        
      </ul>
    </nav>
  )
}

export default Nav;