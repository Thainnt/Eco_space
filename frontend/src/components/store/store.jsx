import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";



const Store = () => {
  const [ products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/api/store/products")
      .then(response => {
        setProducts(response.data.products)
      })
  }, [])

  return ( 
    <div className="store">
    {products && <ProductList 
      products={products}
      title="All products" />}
    </div>
  );
}
 
export default Store;