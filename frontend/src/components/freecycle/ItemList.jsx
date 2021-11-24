import{ Link } from "react-router-dom";
import { Container } from "../styles/Container.styled";



export default function ItemList(props) {

  const { items, title } = props;
  const myStyles = {
    width:"400px",
    height:"450px"
  }
  return (
    <>
    <h2>Category</h2>
    <Container>
      {items.map((item)  => (
        <div className="product-preview" key={item.id}>
          <Link to={`/freecycle/items/${item.id}`} >
            <div className="item_card">
              <img style={myStyles} className="item_image" src={item.image_url} alt={item.name}/>
              <span className="item_content">
                <span className="item_name">
                   {item.name}
                </span>
                   
                </span>
                </div>
          </Link>
        </div>
      ) )}
    </Container>
    </>

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
  );
}