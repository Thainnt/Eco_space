import Cart from "./Cart";
import { Drawer } from "@mui/material";
import { Wrapper } from "../styles/main.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";

const Main = () => {
  const { cartOpen, setCartOpen } = useContext(dataContext);

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart />
      </Drawer>
    </Wrapper>
  );
};

export default Main;
