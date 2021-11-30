import { useState, useContext, useEffect } from "react";
import { dataContext } from "../../Hooks/ContextProvider";

import ItemList from "./ItemList";

export default function UserDashboard() {
  const { user, allItems} = useContext(dataContext);
  const [itemsByUser, setItemsByUser] = useState([]);
  
  useEffect(() => {
    setItemsByUser(allItems.filter(item => item.seller_id === user.id));
  },[user, allItems]);
  
  return (
      <section className="item-show">
        <h3>Your items</h3>
        {itemsByUser && <ItemList
          itemsByCategory={itemsByUser}
          title="Your items"
          />}
      </section>
  );
}