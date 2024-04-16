import React, { useState } from 'react';
import { TbLayoutDashboard } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";
import { FaQuestion } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

export default function Chats() {
    const [selectedOption, setSelectedOption] = useState('current');

    return (
        <div className='chats flex flex-col justify-between glass-morph '>
            <div className='flex justify-between items-center'>
               <p className='logo mr-4 font-bold text-2xl'>Chats</p>
               <IoSearch style={{cursor:'pointer', fontSize:'1.5rem'}}/>
            </div>

            <div className='flex flex-col gap-5'>
                <div className={`p-2 flex gap-3 ${selectedOption === 'current' ? 'selected' : ''} cursor-pointer hoverColor`} onClick={() => setSelectedOption('current')}><TbLayoutDashboard className='chatsicon'/><p>Current</p></div>

                <div className={`p-2 flex gap-3 ${selectedOption === 'bookmark' ? 'selected' : ''} cursor-pointer hoverColor`} onClick={() => setSelectedOption('bookmark')}><FaRegBookmark className='chatsicon'/><p>Bookmark</p></div>

                <div className={`p-2 flex gap-3 ${selectedOption === 'favorites' ? 'selected' : ''} cursor-pointer hoverColor`} onClick={() => setSelectedOption('favorites')}><FaRegStar className='chatsicon'/><p>Favorites</p></div>

                <div className={`p-2 flex gap-3 ${selectedOption === 'trash' ? 'selected' : ''} cursor-pointer hoverColor`} onClick={() => setSelectedOption('trash')}><LuTrash className='chatsicon'/> <p>Trash</p></div>

                <div className={`p-2 flex gap-3 ${selectedOption === 'unassigned' ? 'selected' : ''} cursor-pointer hoverColor`} onClick={() => setSelectedOption('unassigned')}><FaQuestion className='chatsicon'/><p>Unassigned</p></div>
            </div>
        </div>
    )
}
