import axios from "axios";

export default function NewItem() {

  function handleSubmit(event) {
    event.preventDefault();
    
    axios.post(""), {
      category_id: 6, //to change
      name: name,
      quantity: quantity,
      description: description,
      image_url: image_url,
      seller_id: 5 // to change
    }
  }

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
            type="number" required
            value={quantity}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. 5"
          />
        </label>

        <label className="new-item__desc">
          Description
          <input
            type="text" required
            value={description}
            onChange={(e) => setName(e.target.value)}
            placeholder="Please provide item details e.g. condition, material, etc."
          />
        </label>

        <label className="new-item__img">
          Photo link
          <input
            type="text" required
            value={image_url}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

      </form>
    </div>
  );
}