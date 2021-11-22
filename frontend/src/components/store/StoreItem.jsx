import { Link } from "react-router-dom";

const StoreItem = (props) => {
  const { name, quantity, description, image_url, seller_id, amount } = props
  return ( 
    <div className="item_container">
      <Link to="#">
        <div className="item_card">
          <img src={image_url} alt={name} className="item_image" />
          <span className="item_content">
            <span className="item_name">{name}</span>
            <span className="item_price_wrap">
              <span className="price_dash">-</span>
              <span className="item_price"> $ {amount} CAD </span>
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}
 
export default StoreItem;