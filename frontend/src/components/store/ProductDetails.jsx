import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContainerDetails } from "../styles/ContainerDetails.styled";
import { userContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";
import { MyArrow } from "../styles/Button.styled";





const ProductsDetails = () => {
  const { navigate, addItemToCart } = useContext(userContext)

  const { id } = useParams();
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get("/api/store/products/" + id)
      .then(response => {
        setProduct(response.data.product);
      })
  }, [id]);

  const handleClick = () => navigate(-1);
  const handleAddToCart = (productItem) => console.log(productItem);

  return ( 
    <ContainerDetails>
      <MyArrow onClick={handleClick} />

      {product && (
          <div className="box">
            <img src={product.image_url} alt={product.name} className="item_image" />
            <span className="content">
              <h2>{product.name}</h2>
              <p>$ {product.amount} CAD</p>
              <p>Quantity</p>
              <button onClick={() => addItemToCart(product)}>ADD TO CART</button>
              <p>{product.description}</p>
              <p>Set yourself up to reduce plastic with our Eco Space products</p>
            </span>
          </div>
      )}
    </ContainerDetails>
  );
}
export default ProductsDetails;