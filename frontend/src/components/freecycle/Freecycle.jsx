import { useState, useContext, useEffect } from "react";
import { Link} from "react-router-dom";
import { MyArrow } from "../styles/Button.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import ItemList from "./ItemList";
import CategoryList from "./CategoryList";
import "./Freecycle.css";


export default function Freecycle() {
  const { navigate } = useContext(dataContext)
  const handleClick = () => navigate(-1);

  const  { categories, allItems } = useContext(dataContext);
  const freeItems = allItems.filter(item => item.is_paid === false);
  const [categoryName, setCategoryName] = useState("All");
  const [itemsByCategory, setItemsByCategory] = useState(freeItems);
  
  if (!categories.find(category => category.id === 0)) {
    categories.unshift({
      id: 0,
      name: 'All'
    })
  }

  useEffect(() => {
    const foundCategory = categories.find(category => category.name === categoryName);
    if (categoryName === "All") {
      setItemsByCategory(freeItems);
    } else {
      setItemsByCategory(freeItems.filter(item => item.category_id === foundCategory.id));
    }

  },[categoryName]);
  
  return (
    <main className="layout">
      <div className="free-style">
      <MyArrow onClick={handleClick} />
      <section className="sidebar">
        <label>Categories</label><br/>
        <CategoryList
         categoryName = {categoryName}
         setCategoryName = {setCategoryName}
         categories = {categories}
        />
      </section>
      <Link to={"new"}>
        <button className="create-new-item-button">Create New Item</button>
      </Link>
      </div>
      <section className="item-show">
        {itemsByCategory && <ItemList
          itemsByCategory={itemsByCategory}
          title={categoryName}
          is_userDashboard={false}
          />}
      </section>
    </main>
  );
}