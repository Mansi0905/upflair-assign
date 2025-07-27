import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChatBot.css";
import "./index.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: <h1 c>NEBULA</h1>,
    },
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Fetch a welcome message from backend when component mounts
    axios
      .get("http://localhost:5000/api/welcome")
      .then((res) => {
        const botMessage = { sender: "bot", text: res.data.message };
        setMessages((prev) => [...prev, botMessage]);
      })
      .catch((err) => {
        console.error("Welcome message fetch error:", err);
      });
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post("http://localhost:5000/api/message", {
        message: input,
      });

      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chatbot-message ${msg.sender}`}>
            <p className="chatbot-bubble">{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chatbot-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="chatbot-input"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="chatbot-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
