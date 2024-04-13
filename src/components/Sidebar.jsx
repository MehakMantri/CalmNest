import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaForwardStep } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBackwardStep } from "react-icons/fa6";
import { SiBookstack } from "react-icons/si";
import { GiArcheryTarget } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import logo from '../assets/logo.png';

export default function Sidebar(props) {
    const navigate=useNavigate();
    function homeIconHandle(){
        navigate("/")
    }
    const goForward = () => {
        navigate(1); 
      };
      const goBack = () => {
        navigate(-1); // Navigate back
      };

    return (
        <div className='sidebar flex flex-col justify-between items-center rounded-3xl'>
            <div>
                <img src={logo} alt="" style={{ width: '80px', height: 'auto' }} />
            </div>
            <div className='flex flex-col gap-4'>
                <IoHome className='iconn' onClick={homeIconHandle}/> 
                <IoChatbubbleEllipses className='iconn' onClick={()=>{navigate("/chat")}}/>
                <SiBookstack className='iconn' onClick={()=>{navigate("/resource")}}/>
                <GiArcheryTarget className='iconn'/>
                <FaWpforms className='iconn'/>
                <FaForwardStep className='iconn' onClick={goForward}/>
                <FaBackwardStep className='iconn' onClick={goBack} />
            </div>
            <div>
                <FaRegUserCircle className='iconn'/>
            </div>
        </div>
    )
}
