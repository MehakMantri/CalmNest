import React from 'react';
import './index.css';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
function App() {
  return (
    <div className="background">
      
      <div className="content">
        <Navbar />
        <Content />
      </div>
    </div>
  );
}

export default App;
