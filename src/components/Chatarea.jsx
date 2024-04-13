import React, { useState, useEffect, useRef } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Chatarea() {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState([]);
  const [formData, setFormData] = useState({ query: "" });
  const messageContainerRef = useRef(null); // Declare messageContainerRef using useRef

  useEffect(() => {
    // Scroll to the bottom of the message container when messages change
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [message]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    let data;
    e.preventDefault();
    if(formData.query.trim() === '') return;

    // Save messages for user
    setMessage([...message, {text: formData.query, sender: 'user'}]);

    // Fetch data & response from API
    try {
      const response = await fetch(`${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      data = await response.json();
      console.log(data);

      // Save bot message after a delay
      setTimeout(() => {
        setMessage([...message, {text: data.Answer, sender: 'bot'}]);
      }, 500);
    } catch(err) {
      console.log("Failed to get query data");
    }
  };

  return (
    <div className="chatarea flex flex-col justify-between items-center">
      <div className="flex justify-between items-center" style={{ width: "100%", borderBottom: "1px solid #e0e0e0", padding: "0.75rem" }}>
        <p className="logo mr-4 font-bold text-2xl">calmNest Ai</p>
        <input placeholder="Paste the API link..." className="rounded-xl p-2 shadow-md" name="url" style={{ width: "300px", marginLeft: "auto" }} onChange={(e) => setUrl(e.target.value)} />
        <img src={logo} alt="" style={{ width: "50px", height: "auto" }} />
      </div>

      <div className="chat-container" ref={messageContainerRef}>
        <div className="message-container" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
          {message.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
              style={{
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ position: "relative", width: "100%" }}>
        <textarea
          placeholder="Express how you feel today..."
          name="query"
          value={formData.query}
          onChange={handleChange}
          style={{
            resize: "none",
            border: "1px solid #bdbdbd",
            width: "100%",
            padding: "0.5rem",
            borderRadius: "1.75rem",
          }}
        />
        <button type="submit">
          <FaArrowAltCircleUp style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", fontSize: "1.25rem", color: "green" }} />
        </button>
      </form>
    </div>
  );
}
