import axios from "axios";
import { useState, useContext } from "react";
import { useParams } from "react-router";
import { dataContext } from "../../Hooks/ContextProvider";
import ItemForm from "./ItemForm";

export default function NewItem() {
  const { categories, fetchAllItems, allItems } = useContext(dataContext);
  const { id } = useParams();
  const itemId = parseInt(id,10)
  const item = allItems.find(item => item.id === itemId);
  console.log('item is', item, 'id', itemId,' is:', typeof itemId, 'all', allItems);

  let category_id = item.category_id;
  const [name, setName] = useState(item.name);
  const [quantity, setQuantity] = useState(item.quantity);
  const [description, setDescription] = useState(item.description);
  const [image_url, setImage_url] = useState(item.image_url);

  function handleSubmit(event) {
    event.preventDefault();
    axios.put(`/api/freecycle/items/${id}`, {
      id: itemId,
      category_id: category_id,
      name: name,
      quantity: quantity,
      description: description,
      image_url: image_url,
    }).then(res => {
      console.log("success");
      fetchAllItems();
      clear();
    }).catch(err => {
      console.log("can not create: ",err);
    })
    reset();
  }

  const foundCategory = categories.find(cat => cat.id === category_id);
  
  function reset() {
    setCategoryName(foundCategory.name);
    setName(item.name);
    setQuantity(item.quantity);
    setDescription(item.description);
    setImage_url(item.image_url);
  };

  function clear() {
    setCategoryName("Others");
    setName("");
    setQuantity(1);
    setDescription("");
    setImage_url("");
  }

  if (categories.find(category => category.id === 0)) {
    categories.shift();
  }

  const [categoryName, setCategoryName] = useState(foundCategory.name);
  
  return (
    <div className="new-item">
      <h1>Make any change of your post here:</h1>
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
        childName={"Edit"}
      />
    </div>
  );
}