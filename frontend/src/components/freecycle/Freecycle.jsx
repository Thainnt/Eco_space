import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { dataContext } from "../../Hooks/ContextProvider";

import ItemList from "./ItemList";
import CategoryList from "./CategoryList";
import "./Freecycle.css";

export default function Freecycle() {

  const  { categories, items } = useContext(dataContext);
  const freeItems = items.filter(item => item.is_paid === false);
  const [categoryName, setCategoryName] = useState("All");
  const [itemsByCategory, setItemsByCategory] = useState(freeItems);
  
  if (!categories.find(category => category.id === 0)) {
    categories.unshift({
      id: 0,
      name: 'All'
    })
  }

  const foundCategory = categories.find(category => category.name === categoryName);
  useEffect(() => {
    if (categoryName === "All") {
      setItemsByCategory(freeItems);
    } else {
      setItemsByCategory(freeItems.filter(item => item.category_id === foundCategory.id));
    }

  },[categoryName]);
  
  return (
    <main className="layout">
      <Link to={"new"}>
        <button>Create New Item</button>
      </Link>
      <section className="sidebar">
        <label>Categories</label><br/>
        <CategoryList
         categoryName = {categoryName}
         setCategoryName = {setCategoryName}
         categories = {categories}
        />
      </section>
      <section className="item-show">
        {itemsByCategory && <ItemList
          itemsByCategory={itemsByCategory}
          title="Category"
          />}
      </section>
    </main>
  );
}