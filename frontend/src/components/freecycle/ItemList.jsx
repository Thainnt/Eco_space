import{ Link } from "react-router-dom";

export default function ItemList(props) {

  const { itemsByCategory } = props;
  
  return (
    <div className="item-list">
      <h2>Category</h2>
      {itemsByCategory.map((item) => (
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