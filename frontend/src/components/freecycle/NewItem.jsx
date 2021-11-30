import axios from "axios";
import { useState, useContext } from "react";
import { dataContext } from "../../Hooks/ContextProvider";
import ItemForm from "./ItemForm";

export default function NewItem() {
  const { user, categories, fetchAllItems } = useContext(dataContext);

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
      fetchAllItems();
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
      <h3>Create new item</h3>
      <ItemForm
        categories={categories}
        categoryName={categoryName}
        setCategoryName={setCategoryName}
        name={name}
        setName={setName}
        quantity={quantity}
        setQuantity={setQuantity}
        description={description}
        setDescription={setDescription}
        image_url={image_url}
        setImage_url={setImage_url}
        reset={reset}
        handleSubmit={handleSubmit}
        childName={"Create"}
      />
    </div>
  );
}