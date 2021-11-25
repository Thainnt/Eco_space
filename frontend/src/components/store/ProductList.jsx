import { Link } from "react-router-dom"
import { Container } from "../styles/Container.styled";
import { MyArrow } from "../styles/Button.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";

const ProductList = (props) => {
  const { navigate } = useContext(dataContext)
  const { products, title } = props

  const handleClick = () => navigate(-1);
  
  return ( 
    <>
      <MyArrow onClick={handleClick} />
      <h2>{title}</h2>
    <Container>
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

    </Container>
    </>
  );
}
 
export default ProductList;