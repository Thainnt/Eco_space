import {React, Fragment} from "react";
import useFetch from "../useFetch";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Item from "./Item";

export default function Freecycle() {

  const categories = 
    [
      {id: 1, name: 'Furnitures'},
      {id: 2, name: 'Electrics/Electronics'},
      {id: 3, name: 'Sports/Recreations'},
      {id: 4, name: 'Vehicles'},
      {id: 5, name: 'Tools'},
      {id: 6, name: 'Others'}
    ];
  
  const categoryList = categories.map((category) =>
  <Dropdown.Item href="#/action-1">{category.name}</Dropdown.Item>
  );
  
  const items = useFetch("http://localhost:8080/api/freecycle/products").data.products;
  
  const itemList = items.map((item) =>
    <Item
      key={item.id}
      name={item.name}
      image_url={item.image_url}
      description={item.description}  
    />
  );

  return (
    <main className="layout">
      <section className="sidebar">
        <DropdownButton id="dropdown-basic-button" title="Categories">
          {categoryList}
        </DropdownButton>
      </section>
      <section className="items">
        <ul>{itemList}</ul>
      </section>
    </main>
  );
}