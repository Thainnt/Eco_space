import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// create a Context
export const userContext = createContext();

export default function ContextProvider(props) {
  const [userName, setuserName] = useState("");
  const [items, setItem] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [itemCount, setItemCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItemToCart = (item) => {
    setItem((prevItems) => {
      const foundItem = prevItems.find((i) => i.id === item.id);
      if (foundItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        setItemCount(itemCount + 1);

        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (id) => {
    setItem((prevItems) => {
      setItemCount(Math.max(itemCount - 1, 0));
      const foundItem = items.find((i) => i.id === id);
      if (foundItem && foundItem.quantity - 1 > 0) {
        return prevItems.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        );
      } else {
        return items.filter((item) => item.id !== id);
      }
    });
  };
  useEffect(() => {
    setuserName(localStorage.getItem("username") || "");
    const localItems = localStorage.getItem("items");
    if (localItems && localItems.length > 0) {
      console.log("local-->", localItems);
      // setItem(JSON.parse(localItems));
    } else {
      // setItem([]);
      // localStorage.setItem("items", JSON.stringify([]));
    }
  }, [location]);

  const data = {
    navigate,
    userName,
    addItemToCart,
    items,
    removeItem,
    itemCount,
    cartOpen,
    setCartOpen,
  };

  return (
    <userContext.Provider value={data}>{props.children}</userContext.Provider>
  );
}
