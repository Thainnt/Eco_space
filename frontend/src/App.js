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
import Cart from "./components/Cart/Cart";
import ItemList from "./components/freecycle/ItemList";
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
        <Route path="/freecycle/new" element={<NewItem />} >
          <Route index element={<ItemList />} />
        </Route>
        <Route path="/freecycle/items/:id" element={<ItemDetails />} />
        <Route path="Message" element={<Message />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart />} />
        

      </Routes>
    </div>
  );
}

export default App;
