import CartItem from "./CartItem";
import { Cartt } from "../styles/Cart.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext, useState } from "react";
import { Drawer } from "@mui/material";

const Cart = () => {
  const { items, cartOpen, setCartOpen } = useContext(dataContext);

  return (
    <Cartt>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <h2>Your Shopping Cart</h2>
        {items.length === 0 ? <p>No items in cart.</p> : <CartItem />}
        <h2>Total:</h2>
      </Drawer>
    </Cartt>
  );
};

export default Cart;
