import CartItem from "./CartItem";
import { Wrapper } from "../styles/Cart.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext, useState } from "react";
import { Button } from "@mui/material";
import StripeContainer from "../Stripe/StripeContainer";

const Cart = () => {
  const { items } = useContext(dataContext);
  const [showitem, setShowItem] = useState(false);

  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.quantity * item.amount, 0);

  const subTotal = calculateTotal(items);
  const tax = calculateTotal(items) * 0.15;
  const total = subTotal + tax;

  const handleClick = () => {
    if (items.length === 0) {
      return alert("Please add item to cart to continue!");
    }
    setShowItem(true);
  };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <CartItem />
          <p>subtotal: ${subTotal.toFixed(2)}</p>
          <p>Tax: ${tax.toFixed(2)}</p>
          <h3>Total: {total.toFixed(2)}</h3>
        </>
      )}
      {showitem ? (
        <StripeContainer />
      ) : (
        <Button onClick={handleClick}>CHECK OUT</Button>
      )}
    </Wrapper>
  );
};

export default Cart;
