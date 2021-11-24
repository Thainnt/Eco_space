import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import axios from "axios";
import "./Freecycle.css";

export default function Freecycle() {
  
  const [categories, setCatagories] = useState([]);
  
  useEffect(() => {
    axios.get("/api/freecycle/categories")
    .then(res => {
      setCatagories(res.data.categories);
    })
  },[]);

  const categoryList = categories.map((category) =>
  <option key={category.id} href="#" value={category.name}>{category.name}</option>
  );

  const [categoryName, setCategoryName] = useState("");
  
  let url = "";
  if (!categoryName) {
    url = "/api/freecycle/products";
  } else {
    const foundCat = categories.find(cat => cat.name === categoryName);
    url = `/api/freecycle/categories/${foundCat.id}`;
  }
  
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(url).then(res => {
      setItems(res.data.products);
    }).catch(err => {
      console.error(err);
    })
  },[url]);

  
  return (
    <main className="layout">
      <Link to={"/new"}>
        <button>Create New Item</button>
      </Link>
      <section className="sidebar">
        <form onSubmit={e => e.preventDefault()}>
        <label>Categories</label><br/>
        <select name="categories" id="category-select" value={categoryName} onChange={event => setCategoryName(event.target.value)}>
          <option key="first" value="">All</option>
          {categoryList}
        </select>
      </form>
      </section>
      <section className="item-show">
        {items && <ItemList
          items={items}
          title="Category"
          />}
      </section>
    </main>
  );
}