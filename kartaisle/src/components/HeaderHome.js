import React from 'react';
import "../styles/header.css";
import Questionmark from '../resources/question-mark-svgrepo-com.svg';
// import Notificationbell from '../resources/bell-svgrepo-com.svg';
import Notificationbell from '../resources/notification-bell-svgrepo-com.svg';

export default function HeaderHome() {
  return (
    <div id="header">
      <div id="logo-header">
        KARTAISLE
      </div>




      <div id="header-help-container">
        <a href="https://www.kike.org">
          <div>
              <img id="header-help" src={Questionmark}/>
          </div>
        </a>
      </div>
      

      
      
      {/* for svg images always import that first then use it with require */}


      

      <div id="header-bell-container">
      
        <div>
          <img id="header-bell" src={Notificationbell}/>
        </div>
        
      </div>
    
      


    
      <div id="header-profile">
        k

      </div>
    </div>
  )
}
