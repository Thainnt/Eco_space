import CartItem from "./CartItem";
import { Cartt } from "../styles/Cart.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext, useState } from "react";
import { Drawer } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, cartOpen, setCartOpen } = useContext(dataContext);

  return (
    <Cartt>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <h2>Your Shopping Cart</h2>
        {items.length === 0 ? <p>No items in cart.</p> : <CartItem />}
        <h2>Total:</h2>
        <Link to={{
          pathname: '/modal/1',
          state: { modal:true }
        }} >
        <Button>CHECK OUT</Button>
        </Link>
      </Drawer>
    </Cartt>
  );
};

export default Cart;
