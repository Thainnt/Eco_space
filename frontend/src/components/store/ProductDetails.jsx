import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";


const ProductsDetails = () => {
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    axios.get("/api/store/products/" + id)
      .then(response => {
        console.log("+++++===>", response);
      })
  }, [id])

  return ( 
    <p>hello</p>
   );
}
 
export default ProductsDetails;