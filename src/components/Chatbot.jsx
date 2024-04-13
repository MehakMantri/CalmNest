import React from 'react';
import Sidebar from './Sidebar';
import Chats from './Chats';
import Chatarea from './Chatarea';
export default function Chatbot(props) {
    props.navi(false)
    return (
        <div className='chatbot flex'>
            <Sidebar/>
            <Chats/>
            <Chatarea/>
        </div>
    )
}
