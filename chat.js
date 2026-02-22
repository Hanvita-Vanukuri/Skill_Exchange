import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat({ room }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.emit("join_room", room);

    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });
  }, [room]);

  const sendMessage = () => {
    socket.emit("send_message", {
      room,
      message,
    });
    setMessage("");
  };

  return (
    <div>
      <h3>Chat Room</h3>
      {chat.map((msg, index) => (
        <p key={index}>{msg.message}</p>
      ))}
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;