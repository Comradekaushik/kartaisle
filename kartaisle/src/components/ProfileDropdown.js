import React from 'react';
import '../styles/profileDropdown.css';
import editor from '../resources/edit-3-svgrepo-com.svg';
import profile from '../resources/profile-1341-svgrepo-com.svg';
// import settings from '../resources/settings-svgrepo-com.svg';
import creditcard from '../resources/credit-card-alt-svgrepo-com.svg';
import { Link } from 'react-router-dom';

export default function ProfileDropdown() {
  return (
    <div className='profile-dropdown-main-container'>
        <div className='profile-name-username'>
            <div className='profile-name-username-profile-initials'>k</div>
            <div className='profile-name-username-username'>kartaisle</div>


        </div>

        <Link to="/editor" className='link-container-dropdown-editor-option'>
        <div className='editor-menu-option'>
            <button className='dropdown-editor-modal-btn'>
                <img className='editor-icon' src={editor}/>
            </button>
            Editor
        </div>
        
        
        </Link>


        {/* <div className='account-menu-option'>
            <button>
                <img src={profile}/>
            </button>
        </div>
        <div className='billing-menu-option'>
            <button>
                <img src={creditcard}/>
            </button>
        </div> */}

        {/* <div className='settings-menu-option'>
            <button>
                <img src={settings}/>
            </button>
        </div> */}

    </div>
  )
}
