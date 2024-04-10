import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { CiCirclePlus } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import logo from '../assets/logo.png';
import Content from './Content';

function Navbar() {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="navbar flex justify-between items-center relative">
      <div className="logo mr-4 font-bold">
        calmNest
      </div>
      <div className="menu relative" onClick={handleToggleOptions}>
        <GiHamburgerMenu className="w-6 h-6" />
        <span className="ml-1">menu</span>
        {showOptions && (
          <div className="options absolute bg-white border border-gray-200 mt-1 rounded-md shadow-lg w-40 top-full left-0">
            {/* Options content */}
            <div className="p-2">Option 1</div>
            <div className="p-2">Option 2</div>
            <div className="p-2">Option 3</div>
            <div className="p-2">Option 4</div>
          </div>
        )}
      </div>
      <div className="connect-button">
        <button className="connect-btn flex items-center">
          <span className="mr-1">Let's Connect</span>
        <div className="social-icons">
  <a href="https://www.facebook.com">
    <FaFacebook className="mr-1 text-xl" />
  </a>
  <a href="https://twitter.com">
    <AiFillTwitterCircle className="mr-1 text-xl" />
  </a>
  <a href="https://www.instagram.com">
    <TiSocialInstagram className="text-xl" />
  </a>
</div>
        </button>
      </div>
      <div className="right-section fixed top-0 right-0 p-4">
        <button className="login-btn mt-3 flex items-center">
          <CiCirclePlus className="mr-1 text-xl" />
          Login
          <FaUserCircle className="ml-1 text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
