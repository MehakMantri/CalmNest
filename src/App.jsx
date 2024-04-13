import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Route, Routes} from "react-router-dom";
import Mainheader from './components/Mainheader';
import './index.css';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import ResourceLibrary from './components/ResourceLibrary';
import Report from './components/Report';
import '@radix-ui/themes/styles.css';
import '@radix-ui/themes/styles.css';
import Books from './components/Books';
import Articles from './components/Articles';
import { BsChatDotsFill } from "react-icons/bs";

function App() {
  const navigate=useNavigate();
  const[display,setDisplay]=useState(true);
  function chatIconHandle(){
    navigate("/chat");
    setDisplay(false)
  }
  function handleNavigateToHome(x) {
    console.log(x);
    setDisplay(x);
  }
  return (
    <div className="background">
      <Routes>
        <Route path="/" element={<Mainheader/>}>
          <Route index element={<Home navi={handleNavigateToHome}/>} />
          <Route path='/chat' element={<Chatbot navi={handleNavigateToHome}/>}/>
          <Route path='/resource' element={<ResourceLibrary navi={handleNavigateToHome}/>}/>
          <Route path='/report' element={<Report/>}></Route>
            {/* <Route path='/resource/books' element={<Books/>}/>
            <Route path='/resource/articles' element={<Articles/>}/> */}
          {/* </Route> */}
        </Route>
      </Routes>
      {display?(<BsChatDotsFill className='cursor-pointer'  style={{fontSize:'3rem', position:'absolute', right:'0', bottom:'0', margin:'1rem', color:'#5BBCFF'}} onClick={chatIconHandle}/>):(<></>)}
    </div>
  );
}
export default App;
