import React from 'react';
import { FaUser } from "react-icons/fa"; 
import "../index.css"

function Content() {
  return (
    
          <div className="circle flex flex-col items-center justify-center mt-40">
  <div className="user-icon ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQ_kRGqRlZAmkDksrsWKHn87jtwROvL5FUayOyffo0-Os80cf9uE96C15V7CfamGxxx0&usqp=CAU" alt="User" className="w-full h-full object-cover" />
  </div>
      <div className="text-center mt-2">
        <p className="text-3xl">
          <span className=" font-bold">Care</span> your mind <br /> with <span className="font-bold">CalmNest</span>
        </p>
        <button className="btn-demo">Demo</button>
      </div>
    </div>
  );
}

export default Content;
