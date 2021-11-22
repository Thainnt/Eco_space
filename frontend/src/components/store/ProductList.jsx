import { Link } from "react-router-dom"

const ProductList = (props) => {
  const { products, title } = props
  return ( 
    <div className="Product-list">
      <h2>{title}</h2>
      {products.map((product) => (
        <div className="product-preview" key={product.id}>
          <Link to={`/products/${product.id}`}>
          <div className="item_card">
            <img src={product.image_url} alt={product.name} className="item_image" />
            <span className="item_content">
              <span className="item_name">{product.name}</span>
              <span className="item_price_wrap">
                <span className="price_dash">-</span>
                <span className="item_price"> $ {product.amount} CAD </span>
              </span>
            </span>
          </div>
          </Link>
        </div>
      ))}

    </div>
  );
}
 
export default ProductList;