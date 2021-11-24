import{ Link } from "react-router-dom";
import { MyArrow } from "../styles/Button.styled";
import { userContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";

export default function ItemList(props) {
  const { navigate } = useContext(userContext)

  const { items, title } = props;
  const handleClick = () => navigate(-1);
  
  return (
    <div className="item-list">
      <MyArrow onClick={handleClick} />

      <h2>Category</h2>
      {items.map((item) => (
        <div className="item-preview" key={item.id}>
          <Link to={`/freecycle/items/${item.id}`}>
            <div className="item-card">
              <div className="item-image-container">
                <img className="item-image" src={item.image_url} alt={item.name}/>
              </div>
              <span className="item_content">
                <span className="item_name">{item.name}</span>
                <p>{item.description}</p>
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}