import React from 'react';
import Navbar from "./Navbar";
import Content from "./Content";

export default function Home(props) {
  props.navi(true)
    return (
        <div className="content">
        <Navbar />
        <Content />
      </div>
    )
}
