import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { MdForest } from "react-icons/md";
import { FaSpaceAwesome } from "react-icons/fa6";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import themes from './Themes';

function Navbar({ changeBackground }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleThemeClick = () => {
    const nextThemeIndex = (selectedTheme + 1) % themes.length;
    setSelectedTheme(nextThemeIndex);
    changeBackground(nextThemeIndex);
    if (soundEnabled) {
      playThemeMusic(nextThemeIndex);
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (soundEnabled && audioRef.current) {
      audioRef.current.pause();
    } else {
      playThemeMusic(selectedTheme);
    }
  };

  const playThemeMusic = (index) => {
    if (audioRef.current) {
      audioRef.current.src = themes[index].music;
      audioRef.current.loop = true; 
      audioRef.current.play();
      audioRef.current.addEventListener('ended', () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      });
    }
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const chatHandler = () => {
    navigate("/chat");
  };

  const resourceHandler = () => {
    navigate("/resource");
  };

  const reportHandler = () => {
    navigate("/report");
  }; 

  return (
    <div className="navbar absolute top-0 left-0 flex justify-between items-center">
      <div className="logo mr-4 font-bold">calmNest</div>
      <div className="menu relative" onClick={handleToggleOptions}>
        <GiHamburgerMenu className="w-6 h-6 cursor-pointer" />
        <span className="ml-1 cursor-pointer">menu</span>
        {showOptions && (
          <div className="options absolute bg-white border border-gray-200 mt-1 rounded-md shadow-lg w-40 top-full left-0 glass-morph">
            <div className="p-2" onClick={reportHandler}>Your Report</div>
            <div className="p-2" >Daily Challenges</div>
            <div className="p-2 cursor-pointer" onClick={resourceHandler}>Resource Library</div>
            <div className="p-2 cursor-pointer" onClick={chatHandler} >Chatbot</div>
          </div>
        )}
      </div>
      <div className="connect-button ">
        <button className="connect-btn flex items-center">
          <span className="mr-1">Let's Connect</span>
          <div className="social-icons">
            <a href="https://www.facebook.com"><FaFacebook className="mr-1 text-xl" /></a>
            <a href="https://twitter.com"><AiFillTwitterCircle className="mr-1 text-xl" /></a>
            <a href="https://www.instagram.com"><TiSocialInstagram className="text-xl" /></a>
          </div>
        </button>
      </div>
      <div className="right-section fixed top-0 right-0 p-4 flex items-center">
        {selectedTheme === 0 && <FaRegSmileBeam className="theme-icon mr-4 text-3xl text-white" onClick={() => handleThemeClick(0)} />}
        {selectedTheme === 1 && <BsCloudRainHeavyFill className="theme-icon mr-4 text-3xl text-blue-500" onClick={() => handleThemeClick(1)} />}
        {selectedTheme === 2 && <MdForest className="theme-icon mr-4 text-3xl text-green-400" onClick={() => handleThemeClick(2)} />}
        {selectedTheme === 3 && <FaSpaceAwesome className="theme-icon mr-4 text-3xl text-blue-500" onClick={() => handleThemeClick(3)} />}
        <button className="sound-btn text-2xl text-white" onClick={toggleSound}>
          {soundEnabled ? <FaVolumeUp /> : <FaVolumeMute />}

        </button>
        <button className="stop-sound-btn" onClick={stopSound}></button>
      </div>
      {/* <div className="right-section fixed top-0 right-0 p-4">
        <button className="login-btn mt-3 flex items-center">
          <CiCirclePlus className="mr-1 text-xl" />
          Login
          <FaUserCircle className="ml-1 text-xl" />
        </button>
      </div> */}
      <audio ref={audioRef} />
    </div>
  );
}

export default Navbar;
