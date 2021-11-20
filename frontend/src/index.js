import "bootstrap/dist/css/bootstrap.css";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Freecycle from "./components/Freecycle";
import Register from "./components/Pages/Register";
import "./index.css";
import App from "./App";
import LogIn from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";

const RouteApp = () => {
  const [loggedInUserName, setLoggedInUserName] = useState("");
  let location = useLocation();

  useEffect(() => {
    console.log("page name", location);
    console.log("cookie--->", Cookies.get("username"));
    setLoggedInUserName(Cookies.get("username"));
  }, [location]);
  return (
    <Routes>
      <Route path="/" element={<App username={loggedInUserName} />}>
        <Route exact path="/freecycle" element={<Freecycle />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
      </Route>
      <Route
        exact
        path="/Dashboard"
        element={<Dashboard username={loggedInUserName} />}
      />
    </Routes>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
