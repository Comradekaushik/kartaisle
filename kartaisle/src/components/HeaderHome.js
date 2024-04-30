import React from 'react';
import "../styles/header.css";
import Questionmark from '../resources/question-mark-svgrepo-com.svg';
// import Notificationbell from '../resources/bell-svgrepo-com.svg';
import Notificationbell from '../resources/notification-bell-svgrepo-com.svg';
import HelpDropdown from './HelpDropdown';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';

export default function HeaderHome() {
  const[helpDropdown,setHelpDropdown] = React.useState(0);
  const[notificationDropdown,setNotificationDropdown] = React.useState(0);
  const[profileDropdown,setProfileDropdown] = React.useState(0);


  function HandleHelpDropdown(){
    if(helpDropdown == 0){
      setHelpDropdown(1);
      setNotificationDropdown(0);
      setProfileDropdown(0);
    }
    else if(helpDropdown == 1){
      setHelpDropdown(0);
    }
  }


  function HandleNotificationDropdown(){
    if(notificationDropdown == 0){
      setNotificationDropdown(1);
      setHelpDropdown(0);
      setProfileDropdown(0);
    }
    else if(notificationDropdown == 1){
      setNotificationDropdown(0);
    }
  }


  function HandleProfileDropdown(){
    if(profileDropdown == 0){
      setProfileDropdown(1);
      setHelpDropdown(0);
      setNotificationDropdown(0);
    }
    else if(profileDropdown == 1){
      setProfileDropdown(0);
      
    }
  }



  return (
    <div id="header">
      <div id="logo-header">
        KARTAISLE
      </div>




      <div id="header-help-container" onClick={HandleHelpDropdown}>
        {/* <a href="https://www.kike.org"> */}
          <div>
              <img id="header-help" src={Questionmark}/>
          </div>
        {/* </a> */}
      </div>
      

      
      
      {/* for svg images always import that first then use it with require */}


      

      <div id="header-bell-container" onClick={HandleNotificationDropdown}>
      
        <div>
          <img id="header-bell" src={Notificationbell}/>
        </div>
        
      </div>
    
      


    
      <div id="header-profile" onClick={HandleProfileDropdown}>
        k

      </div>

      {helpDropdown == 1 && <HelpDropdown/>}
      {notificationDropdown == 1 && <NotificationDropdown/>}
      {profileDropdown == 1 && <ProfileDropdown/>}

    </div>
  )
}
