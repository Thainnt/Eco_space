import { Link } from "react-router-dom"
import { Container, Box } from "../styles/Container.styled";
import { MyArrow } from "../styles/Button.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";
import Admin from "../Admin/Admin";

const ProductList = (props) => {
  const { navigate, user } = useContext(dataContext)
  const { products, title } = props

  const handleClick = () => navigate(-1);
  
  return ( 
    <Box>
      <div className="top">
        <MyArrow onClick={handleClick} />
        <h2>{title}</h2>
        <div>
        {user.is_admin ? <Admin /> : null}
        </div>
      </div>
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
    </Box>
  );
}
 
export default ProductList;