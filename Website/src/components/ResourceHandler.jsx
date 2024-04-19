import React, { useState } from "react";
// import {useNavigate} from 'react-router-dom'
import Books from "./Books";
import Articles from "./Articles";
import Podcast from "./Podcast";
// import { usePages } from "./MediumManager";

const ResourceHandler = ({currentPage}) => {

  return (
    <>
      {currentPage === "books" && <Books />}
      {currentPage === "articles" && <Articles />}
      {currentPage === "podcast" && <Podcast/>}
    </>
  );
};

export default ResourceHandler;
