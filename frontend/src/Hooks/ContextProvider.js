import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

// create a Context
export const dataContext = createContext();

export default function ContextProvider(props) {
  const [userName, setuserName] = useState("");
  const [items, setItem] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [itemCount, setItemCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState({});
  const [categories, setCategories] = useState([]);
  const [allItems, setAllItems] = useState([]);

  const fetchAllItems = () => {
    axios.get("/api/freecycle/items")
    .then(res => {
      setAllItems(res.data.products);
    }).catch((err) => {
      console.error(err);
    });
  };

  useEffect(() => {
    axios.get("/api/freecycle/categories")
      .then(res => {
        setCategories(res.data.categories);
      }).catch((err) => {
        console.error(err);
      });

    fetchAllItems();
  }, []);

  useEffect(() => {
    setUser(
      localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {});
  }, []);

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
    categories,
    allItems,
    user,
    fetchAllItems
  };

  return (
    <dataContext.Provider value={data}>{props.children}</dataContext.Provider>
  );
}
