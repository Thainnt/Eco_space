import Freecycle from "./components/freecycle/Freecycle";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Pages/Navbar";
import Store from "./components/store/store";
import Register from "./components/Pages/Register";
import LogIn from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import Message from "./components/Text/Message";
import ProductsDetails from "./components/store/ProductDetails";
import About from "./components/Pages/About";

import GlobalStyles from "./components/styles/Global";

import ItemDetails from "./components/freecycle/ItemDetails";
import NewItem from "./components/freecycle/NewItem";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/products/:id" element={<ProductsDetails />} />
        <Route exact path="/freecycle" element={<Freecycle />} />
          <Route path="/new" element={<NewItem/>} />
        <Route exact path="freecycle" element={<Freecycle />}></Route>
        <Route path="Message" element={<Message />} />
        <Route exact path="/freecycle/items/:id" element={<ItemDetails />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
