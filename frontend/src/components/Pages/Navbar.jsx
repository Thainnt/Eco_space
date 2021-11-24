import { Routes, Route, Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import styles from "../../styles.css"
import axios from "axios";
import { StyledIcon } from "../styles/Icon";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from "@mui/material";
import { Button } from "@mui/material";
import { Container, Wrapper, Logo, Left, Right, MenuItem } from "../styles/nav.styled";



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
    <Container class='navbar'>
      <Wrapper>
        <Left>
          <Logo>Eco Space</Logo>
        </Left>
        <Right>
          <Link to="/">
            <MenuItem>HOME</MenuItem>
          </Link>
          <Link to="/About">
            <MenuItem>ABOUT US</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Link>
        {loggedInUserName.length > 0 ? (
          <>
            <MenuItem>{loggedInUserName}</MenuItem>
            <MenuItem>
              <Button color="primary" onClick={handleClick}>LOG OUT</Button>
            </MenuItem>
          </>
        ):(
          <Link to="/Login">
            <MenuItem>
            <StyledIcon size={25} />
            </MenuItem>
          </Link>
        )}
        
        </Right> 
      </Wrapper>
    </Container>
  )
}

export default Nav;