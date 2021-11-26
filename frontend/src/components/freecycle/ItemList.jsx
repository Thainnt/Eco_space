import{ Link } from "react-router-dom";
import axios from "axios";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext } from "react";
import { MyArrow } from "../styles/Button.styled";
import { Container } from "../styles/Container.styled";



export default function ItemList(props) {
  const { navigate } = useContext(dataContext)
  const { itemsByCategory, title, is_userDashboard } = props;
  const handleClick = () => navigate(-1);
  const myStyles = {
    width:"400px",
    height:"450px"
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
    
    const ConditionalLink = ({ children, linkTo, condition }) => (condition && linkTo)
        ? <Link to={linkTo}>{children}</Link>
        : <>{children}</>;
    
    return (
      <div className="product-preview" key={item.id}>
        <ConditionalLink linkTo={`/freecycle/items/${item.id}`} condition={!is_userDashboard}>
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
        </ConditionalLink>
        {is_userDashboard && 
          <button 
            className="user-dashboard__del"
            onClick={() => {
              deleteItem(item.id);
              navigate("/listed-items")
            }}
          >Delete</button>}
      </div>
    );
  });

  return (
    <>
    <MyArrow onClick={handleClick} />
    <h2>{title}</h2>
    <Container>
      {itemCard}
    </Container>
    </>
  );
}

// <div className="item-list">
//   <h2>Category</h2>
//   {items.map((item) => (
//     <div className="item-preview" key={item.id}>
//       <Link to={`/freecycle/items/${item.id}`}>
//         <div className="item-card">
//           <div className="item-image-container">
//             <img className="item-image" src={item.image_url} alt={item.name}/>
//           </div>
//           <span className="item_content">
//             <span className="item_name">{item.name}</span>
//             <p>{item.description}</p>
//           </span>
//         </div>
//       </Link>
//     </div>
//   ))}
// </div>