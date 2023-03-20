import React, { useContext, useEffect, useState } from 'react';
import { MyArrow } from "../styles/Button.styled";
import { dataContext } from '../../Hooks/ContextProvider';
import './Message.css'


function Messages({ socket }) {
  const { navigate } = useContext(dataContext);
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
      <div className='message-container'>
        {[...Object.values(messages)]
          .sort((a, b) => a.time - b.time)
          .map((message) => (
            <div
              key={message.id}
              className="message"
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              <p>
                <span>{message.value}</span>
                <span>{new Date(message.time).toLocaleTimeString()}</span>
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Messages;
