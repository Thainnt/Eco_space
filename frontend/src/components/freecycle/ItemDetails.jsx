import axios from "axios";
import { useEffect, useState} from "react";
import { useParams } from "react-router";


import { Link } from "react-router-dom";
import { ContainerDetails } from "../styles/ContainerDetails.styled";
import { MyArrow } from "../styles/Button.styled";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";


export default function ItemDetails() {
  const { navigate, user, fetchAllItems } = useContext(dataContext)
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

  const handleClick = () => navigate(-1);

  const is_owner = item.seller_id === user.id;
  console.log('item:', item, 'owner:', is_owner);

  const deleteItem = (itemId) => {
    axios.delete(`/api/freecycle/items/${itemId}`)
    .then(res => {
      console.log("deleted", res);
      fetchAllItems();
    }).catch(err => {
      console.error(err);
    });
  };

  return ( 
    <ContainerDetails>
      <MyArrow onClick={handleClick} />

      {item && (
        <div className="box">
          <img className="item_image" src={item.image_url} alt={item.name}/>
          <span className="content">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Location: {item.location}</p>
            <p>Quantity: {item.quantity}</p>
            {is_owner ? 
              <div>
                <Link to="/listed-items">
                  <button 
                    className="user-dashboard__del"
                    onClick={() => {
                      deleteItem(item.id);
                    }}>Delete
                  </button>
                </Link>
                <Link to={`/freecycle/edit/${id}`}>
                  <button className="user-dashboard__del">Edit</button>
                </Link>
              </div> :
              <Link to="/Message">
                <button>Contact Owner</button>
              </Link>
              }
          </span>
        </div>
      )}
    </ContainerDetails>
  )
}