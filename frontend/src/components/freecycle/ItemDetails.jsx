import axios from "axios";
import { useEffect, useState} from "react";
import { useParams } from "react-router";


export default function ItemDetails() {

  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get("/api/freecycle/products/" + id)
      .then(response => {
        setItem(response.data.product);
      }).catch(error => {
        console.error(error);
      })
  }, [id])

  return ( 
    <section className="item-details">
      <h2>{item.name}</h2>
      <img className="item-details-image" src={item.image_url} alt={item.name}/>
      <p className="item-details-desc">{item.description}</p>
      <span className="item-details-loc">Location: {item.location}</span>
      <br/>
      <button className="item-details-contact">Contact owner</button>
    </section>
   );
}