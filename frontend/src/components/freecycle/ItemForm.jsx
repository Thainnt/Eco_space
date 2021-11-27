import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";

export default function ItemForm (props) {

  const{ 
    categories,
    categoryName,
    setCategoryName,
    name,
    setName,
    quantity,
    setQuantity,
    description,
    setDescription,
    image_url,
    setImage_url,
    reset,
    handleSubmit,
    childName
  } = props;

  return (
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

        <button type="submit" className="new-item__submit">{childName}</button>
        <button type="reset" className="new-item__reset" onClick={reset}>Reset</button>
        <Link to="/freecycle">
          <button className="new-item__cancel">Back</button>
        </Link>

      </form>
  );
}