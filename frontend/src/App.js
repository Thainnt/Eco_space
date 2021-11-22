import Freecycle from "./components/freecycle/Freecycle";
import { Routes, Route, Link, Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Pages/Navbar";
import React, { useEffect, useState } from "react";
import Store from "./components/store/store";
import Register from "./components/Pages/Register";
import LogIn from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import ProductsDetails from "./components/store/ProductDetails";
import GlobalStyles from "./components/styles/Global";

function App() {
  const [loggedInUserName, setLoggedInUserName] = useState("");
  let location = useLocation();

  useEffect(() => {
    setLoggedInUserName(localStorage.getItem("username") || "");
  }, [location]);
  return (
    <div className="App">
      <GlobalStyles />
      <Nav loggedInUserName={loggedInUserName} />
      <Routes>
        <Route exact path="/" element={<div>Home</div>} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/products/:id" element={<ProductsDetails />} />
        <Route exact path="/freecycle" element={<Freecycle />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route
          exact
          path="/Dashboard"
          element={<Dashboard username={loggedInUserName} />}
        />
      </Routes>
    </div>
  );
}

export default App;
