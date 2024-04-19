import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ResourceContent from './ResourceContent';
import Books from './Books';
import Articles from './Articles';
import ResourceHandler from './ResourceHandler';


const ResourceLibrary = (props) => {
    useEffect(() => {
        if (typeof props.navi === 'function') {
            props.navi(true); // Call props.navi when the component mounts
        }
    }, [props.navi]); // Dependency array ensures that the effect runs only when props.navi changes

    const [currentPage, setCurrentPage] = useState('books');

    return (
        <div className='chatbot flex' >
            <Sidebar/>
            <ResourceContent currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            {/* <Books/>
            <Articles/> */}
            <ResourceHandler currentPage={currentPage}/>
        </div>
    );
}

export default ResourceLibrary;
