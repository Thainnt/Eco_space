import React, { useContext, useEffect, useState } from 'react';
import { Container } from '../styles/messages.styled';
import { MyArrow } from "../styles/Button.styled";
import { dataContext } from '../../Hooks/ContextProvider'

function Messages({ socket }) {
  const { user, navigate } = useContext(dataContext);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        newMessages[message.id] = message;
        return newMessages;
      });
    };
    

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        delete newMessages[messageID];
        return newMessages;
      });
    };
  
    socket.on('message', messageListener);
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('getMessages');

    return () => {
      socket.off('message', messageListener);
      socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

  const handleClick = () => navigate(-1);

  return (
    <div>
      <MyArrow onClick={handleClick} /> 
      <Container>
        {[...Object.values(messages)]
          .sort((a, b) => a.time - b.time)
          .map((message) => (
            <div
            key={message.id}
            className="message-container"
            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              <span className="message">{message.value}</span>
              <span className="date">{new Date(message.time).toLocaleTimeString()}</span>
            </div>
          ))
        }
      </Container>
    </div>
  );
}

export default Messages;
            // <span className="user">{user.name}:</span>