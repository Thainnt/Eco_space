import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Freecycle from "./components/Freecycle";
import Register from "./components/Pages/Register";
import "./index.css";
import App from "./App";
import LogIn from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/freecycle" element={<Freecycle />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
