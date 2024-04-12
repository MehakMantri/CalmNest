import React, { useState } from "react";
import { TbArticle } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { FaPodcast } from "react-icons/fa";
// import { LuTrash } from "react-icons/lu";
import { FaQuestion } from "react-icons/fa6";
import { BsBook } from "react-icons/bs";


const ResourceContent = ({ currentPage, setCurrentPage }) => {
  const [ selectedOption, setSelectedOption ] = useState('books');
  const handleClick = (option) => {
    setSelectedOption(option);
    setCurrentPage(option);
  };
  return (
    <div className="chats flex flex-col justify-between ">
      <div className="flex justify-between items-center">
        <p className="logo mr-4 font-bold text-2xl">Resource Library</p>
        <IoSearch style={{ cursor: "pointer", fontSize: "1.5rem" }} />
      </div>

      <div className="flex flex-col gap-5">
        <div
          className={`p-2 flex gap-3 ${
            selectedOption === "books" ? "selected" : ""
          } cursor-pointer hoverColor`}
          onClick={() => handleClick("books")}
        >
          <BsBook className="chatsicon" />
          <p>Books</p>
        </div>

        <div
          className={`p-2 flex gap-3 ${
            selectedOption === "articles" ? "selected" : ""
          } cursor-pointer hoverColor`}
          onClick={() => handleClick("articles")}
        >
          <TbArticle className="chatsicon" />
          <p>Journal & Articles</p>
        </div>

        <div
          className={`p-2 flex gap-3 ${
            selectedOption === "podcast" ? "selected" : ""
          } cursor-pointer hoverColor`}
          onClick={() => handleClick("podcast")}
        >
          <FaPodcast className="chatsicon" />
          <p>Podcast</p>
        </div>

        {/* <div className={`p-2 flex gap-3 ${selectedOption === 'trash' ? 'selected' : ''} cursor-pointer hoverColor`} onClick={() => handleCllick('trash')}><LuTrash className='chatsicon'/> <p>Trash</p></div> */}

        <div
          className={`p-2 flex gap-3 ${
            selectedOption === "faq" ? "selected" : ""
          } cursor-pointer hoverColor`}
          onClick={() => handleClick("faq")}
        >
          <FaQuestion className="chatsicon" />
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default  ResourceContent;
