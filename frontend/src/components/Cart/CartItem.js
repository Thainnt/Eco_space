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
              {/* <p>Total: ${item.amount * }</p> */}
            </div>
            <div className="buttons">
              <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => removeItem(item.id)}
              >
                -
              </Button>
              <p>{item.quantity}</p>
              <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => addItemToCart(item)}
              >
                +
              </Button>
            </div>
          </div>
        </Wrapper>
      ))}
    </>
  );
};

export default CartItem;
