import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import ResourceContent from './ResourceContent';
import Books from './Books';
import Articles from './Articles';
import ResourceHandler from './ResourceHandler';

const ResourceLibrary = (props) => {
  const { navi } = props;
  useEffect(() => {
    navi(true);
    return () => {
    };
  }, [navi]); 

  const [currentPage, setCurrentPage] = useState('books');

  return (
    <div className='chatbot flex'>
      <Sidebar />
      <ResourceContent currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* <Books/>
      <Articles/> */}
      <ResourceHandler currentPage={currentPage} />
    </div>
  );
};

export default ResourceLibrary;
