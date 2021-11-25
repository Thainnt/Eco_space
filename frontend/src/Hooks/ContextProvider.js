import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

// create a Context
export const dataContext = createContext();

export default function ContextProvider(props) {
  const [user, setUser] = useState({});
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  const navigate = useNavigate()
  const location = useLocation()

  const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

  useEffect(() => {
    
    Promise.all([
      axios.get("/api/freecycle/categories"),
      axios.get("/api/freecycle/items")
    ]).then((all) => {
      setCategories(all[0].data.categories);
      setItems(all[1].data.products)
    }).catch((err) => {
      console.error(err);
    });
    
    setUser(userData || {});
  },[]);

  const data = { navigate, user, categories, items }

  return (
    <dataContext.Provider value={data}>
      {props.children}
    </dataContext.Provider>
  );
};
      // axios.get("/api/freecycle/categories")
      //   .then((res) => {
      //     setCategories(res.data.categories);
      //   })
  
      // axios.get("/api/freecycle/items")
      // .then((res) => {
      //   setItems(res.data.products);
      // })
  
      // console.log('is:+.', '==',items, '& ', categories, '=');