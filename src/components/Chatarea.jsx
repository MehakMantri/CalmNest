import React, { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Chatarea() {
 const [url,setUrl] = useState('');
 const [message,setMessage] = useState([]);
  const [formData, setformData] = useState({
    query: "",
  });
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    let data;
    e.preventDefault();
    if(formData.query.trim() === '') return;

    /* ---------------------Save messages for user-----------------*/ 
    setMessage([...message, {text: formData.query, sender: 'user'}]);

    /* ---------------------Here fetch the data & response from api-----------------*/ 
    try{
        const response = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        data = await response.json();
        console.log(data);
    }catch(err){
        console.log("Failed to get query data");
    }
    /* ---------------------Save messages for bot-----------------*/ 
    setTimeout(()=>{
        setMessage((previousMessage)=>[...previousMessage, {text: data.Answer, sender: 'bot'}]);
        console.log(data.Answer)
    },500)


  };

  return (
<div className="chatarea flex flex-col justify-between items-center">
  <div
    className="flex justify-between items-center"
    style={{
      width: "100%",
      borderBottom: "1px solid #e0e0e0",
      padding: "0.75rem",
      // backgroundColor: ' #',
      borderRadius:'20px'
    }}
  >
    <p className="logo mr-4 font-bold text-2xl">calmNest Ai</p>
    <input
      placeholder="Paste the API link..."
      className="rounded-xl p-2 shadow-md"
      name="url"
      style={{ width: "300px", marginLeft: "auto" }}
      onChange={(e) => {
        e.preventDefault();
        setUrl(e.target.value);
      }}
    />
    <img src={logo} alt="" style={{ width: "50px", height: "auto" }} />
  </div>
  <div className="chat-container" >
    <div className="message-container">
      {message.map((message, index) => (
        <div
          key={index}
          className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
        >
          {message.text}
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
      <FaArrowAltCircleUp
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          fontSize: "1.25rem",
          color: "green",
        }}
      />
    </button>
  </form>
</div>
  );
}
