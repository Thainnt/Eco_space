// import { useState } from "react";
// import { io } from "socket.io-client";

// const Messages = () => {
//   const socket = io();
//   const [message, setMessage] = useState('');
//   const [handle, setHandle] = useState('')
//   const handleSubmit = () => {
//     socket.emit('chat', {
//       message: message,
//       handle: handle
//     });
//     setMessage('');
//   }

//   return ( 
//     <div>
//       <h2>Messages</h2>
//       <div className="chat-window">
//         <div className="output"></div>
//       </div>
//       <form onSubmit={handleSubmit}>
//           <input 
//             type="text"
//             className="handle"
//             placeholder="Handle"
//             value={handle}
//             onChange={(e) => setHandle(e.target.value)}
//           />
//           <input 
//             type="text"
//             className="message"
//             placeholder="message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)} 
//           />
//           <button className="button">send</button>
//       </form>
//     </div>
//   );
// }

// export default Messages;

import { useState, useEffect } from "react";
import { io } from 'socket.io-client';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { Container } from "../styles/text.styled";


function Message() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io();
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <Container>
      <header className="message-header">
        Product chat
      </header>
      { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </Container>
  );
}

export default Message;