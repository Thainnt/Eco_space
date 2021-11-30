import{ Link } from "react-router-dom";
import axios from "axios";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";
import { MyArrow } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";
import { Card, Button} from 'react-bootstrap';



export default function ItemList(props) {
  const { navigate } = useContext(dataContext)
  const { itemsByCategory, title, is_userDashboard } = props;
  const handleClick = () => navigate(-1);
  const myStyles = {
    width:"350px",
    height:"350px"
  }

  const deleteItem = (id) => {
    axios.delete(`api/freecycle/items/${id}`)
      .then(res => {
        console.log("deleted", res.status);
      }).catch(err => {
        console.error(err);
      })
  };

  const itemCard = itemsByCategory.map((item)  => {
    
    return (
      <div className="product-preview" key={item.id}>
        <Link to={`/freecycle/items/${item.id}`}>
          <div className="item_card">
            <img 
              style={myStyles}
              className="item_image" 
              src={item.image_url} 
              alt={item.name}
              />
            <span className="item_content">
              <span className="item_name">{item.name}</span>
            </span>
          </div>
        </Link>
      </div>
    );
  });

  return (
    
    <div>
      <Container>
        {itemCard}
      </Container>
    </div>
    
  );
}

//Dashboard option:
// const itemCard = itemsByCategory.map((item)  => {
    
//   const ConditionalLink = ({ children, linkTo, condition }) => (condition && linkTo)
//       ? <Link to={linkTo}>{children}</Link>
//       : <>{children}</>;
  
//   return (
//     <div className="product-preview" key={item.id}>
//       <ConditionalLink linkTo={`/freecycle/items/${item.id}`} condition={!is_userDashboard}>
//         <div className="item_card">
//           <img 
//             style={myStyles}
//             className="item_image" 
//             src={item.image_url} 
//             alt={item.name}
//             />
//           <span className="item_content">
//             <span className="item_name">{item.name}</span>
//           </span>
//         </div>
//       </ConditionalLink>
//       {is_userDashboard && 
//         <button 
//           className="user-dashboard__del"
//           onClick={() => {
//             deleteItem(item.id);
//             navigate("/listed-items")
//           }}
//         >Delete</button>}
//     </div>
//   );
// });