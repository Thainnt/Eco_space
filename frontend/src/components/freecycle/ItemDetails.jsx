import axios from "axios";
import Talk from "talkjs";
import { useEffect, useState} from "react";
import { useParams } from "react-router";
import "./ItemDetails.css";


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
  }, [id]);

  const [users, setUsers] = useState({});
  useEffect(() => {
    axios.get("/api/users/")
      .then(response => {
        setUsers(response.data.users);
      }).catch(error => {
        console.error(error);
      })
  }, []);

  function handleClick(userId) {

    /* Retrieve the two users that will participate in the conversation */
    const currentUser = users[0];
    const user = users.find(user => user.id === userId)

    /* Session initialization code */
    Talk.ready
    .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User(currentUser);
        const other = new Talk.User(user)

        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
        if (!window.talkSession) {
            window.talkSession = new Talk.Session({
                appId: 'tmuxfmBw',
                me: me
            });
        } 
        
        /* Get a conversation ID or create one */
        const conversationId = Talk.oneOnOneId(me, other);
        const conversation = window.talkSession.getOrCreateConversation(conversationId);
        
        /* Set participants of the conversations */
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        /* Create and mount chatbox in container */
        ItemDetails.chatbox = window.talkSession.createChatbox(conversation);
        ItemDetails.chatbox.mount(ItemDetails.container);
    })            
    .catch(e => console.error(e));
}

  return (
    <div className="item-container">
      <section className="item-details">
        <h2>{item.name}</h2>
        <img className="item-details-image" src={item.image_url} alt={item.name}/>
        <p className="item-details-desc">{item.description}</p>
        <span className="item-details-loc">Location: {item.location}</span>
        <br/>
        <button 
          onClick={(userId) => handleClick(item.seller_id)}
          className="item-details-contact">Contact owner</button>
        <div className="chatbox-container" ref={c => ItemDetails.container = c}>
          <div id="talkjs-container" style={{height: "300px"}}><i></i></div>
        </div>
      </section>
    </div>
   );
}