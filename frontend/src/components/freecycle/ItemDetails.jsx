import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";


export default function ItemDetails() {
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    axios.get("/api/freecycle/products/" + id)
      .then(response => {
        console.log("+++++===>", response);
      })
  }, [id])

  return ( 
    <p>hello</p>
   );
}