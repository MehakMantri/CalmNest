import React from 'react';
import { FaUser } from "react-icons/fa"; 
import "../index.css"

function Content() {
  return (
    
          <div className="circle flex flex-col items-center justify-center mt-40">
  <div className="user-icon ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQ_kRGqRlZAmkDksrsWKHn87jtwROvL5FUayOyffo0-Os80cf9uE96C15V7CfamGxxx0&usqp=CAU" alt="User" className=" user-icon w-full h-full object-cover rounded-full" />
  </div>
      <div className="text-center mt-2">
        <p className="text-3xl">
          <span className=" font-bold">Care</span> your mind <br /> with <span className="font-bold">CalmNest</span>
        </p>
        {/* <button className="btn-demo">Demo</button> */}
        <a href=" https://youtu.be/l1AOVsF44Vk?si=CL3R4uajp5txX8ws" className="btn-demo" target="_blank" rel="noopener noreferrer">
  Demo
</a>
       
      </div>
    </div>
  );
}

export default Content;
