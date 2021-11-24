import axios from "axios";
import Talk from "talkjs";
import { useEffect, useState} from "react";
import { useParams } from "react-router";

import { Link, useNavigate } from "react-router-dom";

import "./ItemDetails.css";
import { ContainerDetails } from "../styles/ContainerDetails.styled";



export default function ItemDetails() {
  const navigate = useNavigate()

  const { id } = useParams();

  const [item, setItem] = useState({});
  useEffect(() => {
    axios.get("/api/freecycle/products/" + id)
      .then(response => {
        setItem(response.data.product);
      }).catch(error => {
        console.error(error);
      })
  }, [id]);


  return ( 
    <ContainerDetails>
      {item && (
        <div className="box">
          <img className="item_image" src={item.image_url} alt={item.name}/>
          <span className="content">
            <h2>{item.name}</h2>
            <p>{item.location}</p>
            <p>{item.description}</p>
            <Link to="/Message">
            <button>Contact Owner</button>
            </Link>
          </span>
        </div>
      )}
    </ContainerDetails>
    // <section className="item-details">
    //   <h2>{item.name}</h2>
    //   <img className="item-details-image" src={item.image_url} alt={item.name}/>
    //   <p className="item-details-desc">{item.description}</p>
    //   <span className="item-details-loc">Location: {item.location}</span>
    //   <br/>
    //   <Link to="/Message">
    //   <button className="item-details-contact">Contact owner</button>
    //   </Link>
    // </section>
  )
}