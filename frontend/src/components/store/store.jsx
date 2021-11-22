import axios from "axios";
import { useEffect, useState } from "react";
import StoreItem from "./StoreItem";


const Store = () => {
  const [ products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/store/products")
      .then(response => {
        setProducts(response.data.products)
      })
  }, [])

  console.log("====>", products)
  const productItems = products.map((product) => {

    return <StoreItem
      key={product.id}
      name={product.name}
      quantity={product.quantity}
      description={product.description}
      image_url={product.image_url}
      seller_id={product.seller_id}
      amount={product.amount}
    />

  })
  console.log("/////",productItems)
  return ( 
    <section>
      <p>hello</p>
      <div>
      {productItems}
      </div>
    </section>
  );
}
 
export default Store;