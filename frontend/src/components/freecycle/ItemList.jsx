import{ Link } from "react-router-dom";

export default function ItemList(props) {

  const { items, title } = props;
  
  return (
    <div className="item-list">
      <h2>Category</h2>
      {items.map((item) => (
        <div className="item-preview" key={item.id}>
          <Link to={`/freecycle/items/${item.id}`}>
            <div className="item-card">
              <img className="item-image" src={item.image_url} alt={item.name}/>
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