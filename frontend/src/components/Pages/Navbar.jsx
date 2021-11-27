import { Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { StyledIcon } from "../styles/Icon";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import { Container, Wrapper, Logo, MenuItem, } from "../styles/nav.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";

const Nav = () => {

  const { userName, itemCount, navigate, setCartOpen } = useContext(dataContext)



  const handleClick = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("user");
    localStorage.removeItem("items");
    axios.post("/api/users/logout")
      .then(response => {
        navigate("/")
      })
  }
  return (
    <Container class='navbar'>
      <Wrapper>

          <Logo>Eco Space</Logo>

        <div>
          <Link to="/">
            <MenuItem>HOME</MenuItem>
          </Link>
          <Link to="/About">
            <MenuItem>ABOUT US</MenuItem>
          </Link>
            <Link to="/listed-items">
              <MenuItem>{userName}</MenuItem>
            </Link>
          <Link to="/main" onClick={() => setCartOpen(true)}>
          <MenuItem>
            <Badge color="secondary" badgeContent={itemCount}>
              <ShoppingCartOutlinedIcon onClick={() => setCartOpen(true)}/>
            </Badge>
          </MenuItem>
        </Link>
        {userName.length > 0 ? (
            
              <button onClick={handleClick}>LOG OUT</button>
            
        ):(
          <Link to="/Login">
            <MenuItem>
            <StyledIcon size={25} />
            </MenuItem>
          </Link>
        )}
        
        </div> 
      </Wrapper>
    </Container>
  )
}

export default Nav;