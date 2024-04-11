import React from 'react'
import { FaArrowAltCircleUp } from "react-icons/fa";
import logo from '../assets/logo.png'

export default function Chatarea() {
    return (
        <div className='chatarea flex flex-col justify-between items-center'>
            <div className='flex justify-between items-center'  style={{ width:'100%',borderBottom:'1px solid black', padding:'0.75rem'}}>
                <p className="logo mr-4 font-bold text-2xl">Your own doctor</p>
                <img src={logo} alt="" style={{ width: '50px', height: 'auto' }} />
            </div>
            <div>
               chatArea
            </div>
            <div style={{ position: 'relative' }}>
              <textarea placeholder="Send your message"  style={{resize:'none', border:'1px solid black', width:'600px', padding:'0.5rem', borderRadius:'0.5rem'}} />
              <FaArrowAltCircleUp style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor:'pointer', fontSize:'1.25rem', color:'green'}} />
            </div>
        </div>
    )
}
