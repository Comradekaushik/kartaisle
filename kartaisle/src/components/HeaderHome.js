import React from 'react';
import "../styles/header.css";

export default function HeaderHome() {
  return (
    <div id="header">
      <div id="logo-header">
        KARTAISLE
      </div>

      <div>
      
        {/* <img id="header-help" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Icon-round-Question_mark.svg"/> */}
        <img id="header-help" src={require("../resources/question-mark-svgrepo-com.svg")}/>
      </div>
      <div>
        <img src={require("../resources/question-mark-svgrepo-com.svg")}/>
      </div>
    </div>
  )
}
