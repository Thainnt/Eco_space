import {React, Fragment, useEffect, useState} from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ItemList from "./ItemList";
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
  
  console.log("***==", state.items, "and***", state.categories);
  const categoryList = state.categories.map((category) =>
  <Dropdown.Item href="#">{category.name}</Dropdown.Item>
  );

  return (
    <main className="layout">
      <section className="sidebar">
        <DropdownButton id="dropdown-basic-button" title="Categories">
        <Dropdown.Item href="#">All</Dropdown.Item>
          {categoryList}
        </DropdownButton>
      </section>
      <section className="item-show">
        {state.items && <ItemList
          items={state.items}
          title="Category"
          />}
      </section>
    </main>
  );
}