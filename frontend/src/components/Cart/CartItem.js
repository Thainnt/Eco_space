import Button from "@mui/material/Button";
import { Wrapper } from "../styles/Wrapper.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";

const CartItem = () => {
  const { items, removeItem, addItemToCart } = useContext(dataContext);

  return (
    <>
      {items.map((item) => (
        <Wrapper key={item.id}>
          <div>
            <h3>{item.name}</h3>
            <div className="information">
              <p>Price: ${item.amount}</p>
              <p>Total: ${item.amount * item.quantity}</p>
            </div>
            <div className="buttons">
              <button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => removeItem(item.id)}
              >
                -
              </button>
              <p className='quantity'>{item.quantity}</p>
              <button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => addItemToCart(item)}
              >
                +
              </button>
            </div>
          </div>
          <img src={item.image_url} alt={item.name} />
        </Wrapper>
      ))}
    </>
  );
};

export default CartItem;
