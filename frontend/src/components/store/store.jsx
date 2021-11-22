import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import StoreItem from "./StoreItem";


const Store = () => {
  const [ products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/store/products")
      .then(response => {
        setProducts(response.data.products)
      })
  }, [])


  // const productItems = products.map((product) => {

  //   return <StoreItem
  //     key={product.id}
  //     name={product.name}
  //     quantity={product.quantity}
  //     description={product.description}
  //     image_url={product.image_url}
  //     seller_id={product.seller_id}
  //     amount={product.amount}
  //   />

  // })

  return ( 
    <div className="store">
    {products && <ProductList 
      products={products}
      title="All products" />}
    </div>
    // <section>
    //   <p>hello</p>
    //   <div>
    //   {productItems}
    //   </div>
    // </section>
  );
}
 
export default Store;