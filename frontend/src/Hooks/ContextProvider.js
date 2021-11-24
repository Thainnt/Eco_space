import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// create a Context
export const userContext = createContext();

export default function ContextProvider(props) {
  const [userName, setuserName] = useState("");
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setuserName(localStorage.getItem("username") || "");
  }, [location]);

  const data = { navigate, userName }

  return (
    <userContext.Provider value={data}>
      {props.children}
    </userContext.Provider>
  );
};