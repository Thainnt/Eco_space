import { Routes, Route, Link } from "react-router-dom";
import styles from "../../styles.css"



const Nav = () => {
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
          <Link to="/Store">Store</Link>
        </li>
        <li>
          <Link to="/Login">Log In</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;