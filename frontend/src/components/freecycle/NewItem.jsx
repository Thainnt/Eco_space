import axios from "axios";
import { useState, useContext } from "react";
import { dataContext } from "../../Hooks/ContextProvider";
import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";

export default function NewItem() {
  const { user, categories } = useContext(dataContext);

  let category_id = 6;
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState("");
  const location = "Halifax"; //to change
  const seller_id = user.id;

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/freecycle/products', {
      category_id: category_id,
      name: name,
      quantity: quantity,
      description: description,
      image_url: image_url,
      location: location,
      seller_id: seller_id
    }).then(res => {
      console.log("success");
    }).catch(err => {
      console.log("can not create: ",err);
    })
    reset();
  }

  function reset() {
    setCategoryName("Others");
    setName("");
    setQuantity(1);
    setDescription("");
    setImage_url("");
  }

  if (categories.find(category => category.id === 0)) {
    categories.shift();
  }

  const [categoryName, setCategoryName] = useState("Others");
  
  const foundCategory = categories.find(cat => cat.name === categoryName);
  category_id = foundCategory.id;

  return (
    <div className="new-item">
      <h1>Create new item</h1>

      <form className="new-item__form" onSubmit={handleSubmit}>

        <label className="new-item__category">
          Select category
          <CategoryList
            categoryName = {categoryName}
            setCategoryName = {setCategoryName}
            categories = {categories}
          />
        </label>

        <label className="new-item__name">
          Name
          <input
            type="text" required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name"
          />
        </label>

        <label className="new-item__quantity">
          Quantity
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 5"
          />
        </label>

        <label className="new-item__desc">
          Description
          <input
            type="text" required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Item details e.g. condition, material, etc."
          />
        </label>

        <label className="new-item__img">
          Photo link
          <input
            type="text" required
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </label>

        <button type="submit" className="new-item__submit">Create</button>
        <button type="reset" className="new-item__reset" onClick={reset}>Reset</button>
        <Link to="/freecycle">
          <button className="new-item__cancel">Back</button>
        </Link>

      </form>
    </div>
  );
}