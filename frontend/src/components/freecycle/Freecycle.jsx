import {React, Fragment, useEffect, useState} from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Item from "./Item";
import axios from "axios";

export default function Freecycle() {
  
  const [state, setState] = useState({
    categories: [],
    items: []
  });
  
  useEffect(() => {
    Promise.all([
      axios.get("/api/freecycle/categories"),
      axios.get("/api/freecycle/products")
    ]).then(all => {
      setState({categories:all[0].data.categories, items:all[1].data.products});
    })
  },[]);
  
  console.log('product list: ', state.items);
  const categoryList = state.categories.map((category) =>
  <Dropdown.Item href="#/action-1">{category.name}</Dropdown.Item>
  );

  const itemList = state.items.map((item) =>
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