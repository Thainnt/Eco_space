import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewItem() {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [description, setDescription] = useState("");
  const [image_url, setImage_url] = useState("");

  // const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/freecycle/products', {
      category_id: 6, //to change
      name: name,
      quantity: quantity,
      description: description,
      image_url: image_url,
      location: "Halifax", //to change
      seller_id: 5 // to change
    }).then(res => {
      console.log("success");
    }).catch(err => {
      console.log("can not create: ",err);
    })
  }
  
  // function validate(event) {
  //   console.log("name",name,"desc", description);
  //   if (name === "") {
  //     setError("Required fields can not be blank.");
  //     return;
  //   } else {
  //     setError("");
  //   }
  // }

  return (
    <div className="new-item">
      <h1>Create new item</h1>

      <form className="new-item__form" onSubmit={handleSubmit}>

        <label className="new-item__category">
          Select category
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

        <Link to="/freecycle">
          <button className="new-item__cancel">Back</button>
        </Link>

      </form>
    </div>
  );
}