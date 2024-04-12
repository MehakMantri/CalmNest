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
          borderBottom: "1px solid black",
          padding: "0.75rem",
        }}
      >
        <p className="logo mr-4 font-bold text-2xl">Your own doctor</p>
        <input placeholder="Paste the api link.." className="rounded p-2" name="url" onChange={(e)=>{
            e.preventDefault();
            setUrl(e.target.value)}}/>
        <img src={logo} alt="" style={{ width: "50px", height: "auto" }} />
      </div>
      <div className=" overflow-y-scroll border border-gray-300 rounded-lg mb-4 w-full h-full">
        {message.map((message, index) => (
          <div key={index} style={{ padding: '5px', backgroundColor: message.sender === 'user' ? '#f0f0f0' : '#e0f7fa' }} className="">
            {message.text}
            {/* {message.} */}
          </div> 
        ))}
        
      </div>
      <form onSubmit={handleSubmit} style={{ position: "relative" }}>
        <textarea
          placeholder="Send your message"
          name="query"
          value={formData.query}
          onChange={handleChange}
          style={{
            resize: "none",
            border: "1px solid black",
            width: "600px",
            padding: "0.5rem",
            borderRadius: "0.5rem",
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
