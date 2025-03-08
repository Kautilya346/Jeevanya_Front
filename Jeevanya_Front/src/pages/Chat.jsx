import React, { useEffect, useState } from "react";
import socket from "../Components/Socketio.js";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
    const sender = "67cbe0d411cdd39989ad62c7"
    const receiver = "67cc1f98018e5d2f186f36ed"
  useEffect(() => {
    // Fetch previous chat history
    axios.get(`http://localhost:3000/messages/${sender}/${receiver}`)
      .then((res) => setMessages(res.data));

    // Listen for new messages
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receiveMessage");
  }, [sender, receiver]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const messageData = { sender, receiver, message: newMessage };
    socket.emit("sendMessage", messageData);
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <h2>Chat</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === sender ? "sent" : "received"}>
            {msg.message}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;