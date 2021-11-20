import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function Navigation(props) {
  return (
  // <nav>
  //   <span>Home</span>
  //   <Link to="/"   style={{ textDecoration: 'none' ,color: '#000000' }}><span>Free cycles</span></Link>
  //   <Link to="/freecycle" style={{ textDecoration: 'none' ,color: '#000000' }}> <span>paid cycles</span></Link>
   
  // </nav>

  <Navbar bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  <Nav className="me-auto ">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Log In</Nav.Link>
    <Nav.Link href="#pricing"><Link to="/register"   style={{ textDecoration: 'none' ,color: '#000000' }}><span>Register</span></Link></Nav.Link>
  </Nav>
  </Container>
</Navbar>
  )
}