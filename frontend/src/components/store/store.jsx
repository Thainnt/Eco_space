import axios from "axios";
import { useEffect, useState } from "react";
// import useFetch from "../useFetch";

const Store = () => {
  const [ products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/store/products")
      .then(response => {
        setProducts(response.data.products)
      })
  }, [])
  
  return ( 
    // console.log(products)
    <>
    <h2>Hello these are the products</h2>
    <p>store items will go here</p>
    <p>hello</p>
    </>
  );
}
 
export default Store;