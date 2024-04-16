import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Chats from './Chats';
import Chatarea from './Chatarea';

export default function Chatbot(props) {
    useEffect(() => {
        if (typeof props.navi === 'function') {
            props.navi(false);
        }
    }, [props.navi]);

    return (
        <div className='chatbot flex'>
            <Sidebar />
            <Chats />
            <Chatarea />
        </div>
    );
}
