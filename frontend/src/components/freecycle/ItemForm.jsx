import { Link } from "react-router-dom";
import CategoryList from "./CategoryList";
import { Wrapper } from "../styles/Container.styled";
import Button from "@mui/material/Button";
import "./ItemForm.css";

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
    <Wrapper>
      <form className="item-form" onSubmit={handleSubmit}>

        <label className="item__category">
          <div>
            Select category
          </div>
          <CategoryList
            categoryName = {categoryName}
            setCategoryName = {setCategoryName}
            categories = {categories}
          />
        </label>

        <label className="item__name">
          Name
          <input
            type="text" required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item name"
          />
        </label>

        <label className="item__quantity">
          Quantity
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 5"
            />
        </label>

        <label className="item__desc">
          Description
          <input
            type="text" required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Item details e.g. condition, material, etc."
            />
        </label>

        <label className="item__img">
          Photo link
          <input
            type="text" required
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </label>
        <div className="button-container">
          <Link to="/freecycle">
            <Button className="item__cancel">Back</Button>
          </Link>
          <Button type="reset" className="item__reset" onClick={reset}>Reset</Button>
          <Button type="submit" className="item__submit">{childName}</Button>
        </div>

      </form>
    </Wrapper>
  );
}