import axios from "axios";
import { useEffect } from "react";
// import useFetch from "../useFetch";

const Store = () => {
  // const url = "http://localhost:8080/api/store/products";
  // const { data: products, isPending, error } = useFetch(url);
  useEffect(() => {
    axios.get("http://localhost:8080/api/store/products")
      .then(response => {
        console.log(response.data.products)
      })
  })
  return ( 
    // console.log(products)
    <h2>Hello these are the products</h2>
  );
}
 
export default Store;