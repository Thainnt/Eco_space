import Freecycle from "./components/Freecycle";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Nav from "./components/Pages/Navbar";
import { useState } from "react";

function App(props) {
  // const [loggedInUserName, setLoggedInUserName] = useState("")
  // setTimeout(()=>{
  //   setLoggedInUserName('yoshi')
  // }, 3000)
  return (
    <div className="App">
      <Nav loggedInUserName={props.username || ""} />
      <Outlet />
    </div>
  );
}

export default App;
