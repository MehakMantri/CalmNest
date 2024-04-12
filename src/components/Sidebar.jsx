import React from 'react';
import { TbLayoutDashboard } from "react-icons/tb";
import { BsChatSquareDots } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import logo from '../assets/logo.png'
export default function Sidebar() {
    return (
        <div className='sidebar flex flex-col justify-between items-center'>
            <div>
            <img src={logo} alt="" style={{ width: '80px', height: 'auto' }} />
            </div>
            <div className='flex flex-col gap-4'>
              <TbLayoutDashboard className='iconn'/> 
              <BsChatSquareDots className='iconn'/>
              <IoSettingsOutline className='iconn' />
            </div>
            <div>
              <FaRegUserCircle className='iconn'/>
            </div>
        </div>
    )
}
