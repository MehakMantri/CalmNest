import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import ResourceLibrary from './components/ResourceLibrary';
import Report from './components/Report';
import '@radix-ui/themes/styles.css';
import '@radix-ui/themes/styles.css';
import { BsChatDotsFill } from 'react-icons/bs';
import Reportresult from './components/Reportresult';
import Navbar from './components/Navbar';
import themes from './components/Themes'; 

function App() {
  const [themeIndex, setThemeIndex] = useState(0); 
  const navigate = useNavigate();
  const location = useLocation();

  const changeBackground = (themeIndex) => {
    setThemeIndex(themeIndex);
    console.log("Changing background to:", themes[themeIndex].name);
  };

  const chatIconHandle = () => {
    navigate('/chat');
  };

  const handleNavigateToHome = (display) => {
    
  };

  const isHomePage = location.pathname === '/'; 

  return (
    <div className="background" style={{ backgroundImage: `url(${themes[themeIndex].backgroundImage})` }}>
      <Routes>
        <Route index element={<Home navi={handleNavigateToHome} />} />
        <Route path="/chat" element={<Chatbot />} />
      <Route path="/resource" element={<ResourceLibrary navi={handleNavigateToResource} />} />

        <Route path="/report" element={<Report />} />
        <Route path="/report/result" element={<Reportresult />} />
      </Routes>
      {isHomePage && (
        <Navbar changeBackground={changeBackground} className="navbar absolute top-0 left-0 flex justify-between items-center" />
      )}
      {isHomePage && (
        <BsChatDotsFill
          className="cursor-pointer"
          style={{ fontSize: '3rem', position: 'absolute', right: '0', bottom: '0', margin: '1rem', color: '#5BBCFF' }}
          onClick={chatIconHandle}
        />
      )}
    </div>
  );
}

export default App;
