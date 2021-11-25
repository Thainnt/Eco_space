import CartItem from "./CartItem";
import { Cartt } from "../styles/Cart.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext, useState } from "react";
import { Drawer } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import StripeContainer from "../Stripe/StripeContainer";

const Cart = () => {
  const { items, cartOpen, setCartOpen } = useContext(dataContext);
  const [showitem, setShowItem] = useState(false);

  return (
    <Cartt>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <h2>Your Shopping Cart</h2>
        {items.length === 0 ? <p>No items in cart.</p> : <CartItem />}
        <h2>Total:</h2>
        {showitem ? (
          <StripeContainer />
        ) : (
          <Button onClick={() => setShowItem(true)}>CHECK OUT</Button>
        )}
        {/* <Link to={{
          pathname: '/modal/1',
          state: { modal:true }
        }} >
        <Button>CHECK OUT</Button>
        </Link> */}
      </Drawer>
    </Cartt>
  );
};

export default Cart;
