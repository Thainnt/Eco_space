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
import ItemList from "./components/freecycle/ItemList";
import NewItem from "./components/freecycle/NewItem";
import UserDashboard from "./components/freecycle/UserDashboard";
import Main from "./components/Cart/Main";
import Add from "./components/Admin/Add";
import Edit from "./components/Admin/Edit";
import Product from "./components/Admin/Product";
import EditItem from "./components/freecycle/EditItem";
import Thanks from "./components/Pages/Thanks";
import Theme from "./components/styles/Theme";

function App() {
  return (
    <Theme>
      <div className="App">
        <GlobalStyles />
        <Nav />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/products/:id" element={<ProductsDetails />} />
          <Route exact path="/freecycle" element={<Freecycle />} />
          <Route path="/freecycle/new" element={<NewItem />}>
            <Route index element={<ItemList />} />
          </Route>
          <Route path="/freecycle/edit/:id" element={<EditItem />} />
          <Route path="/freecycle/items/:id" element={<ItemDetails />} />
          <Route path="Message" element={<Message />} />
          <Route exact path="/listed-items" element={<UserDashboard />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route path="/main" element={<Main />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="Thanks" element={<Thanks />} />
        </Routes>
      </div>
    </Theme>
  );
}

export default App;
