import React from 'react';
import '../styles/collection.css';
import threedots from "../resources/three-dots-svgrepo-com.svg"

import CollectionDropdown from './CollectionDropdown';




export default function Collection(props) {
  const[dropdown,setDropdown] = React.useState(0);
  function dropdownhideshow(){
    let newvalue = 0;
    if(dropdown == 0){
      newvalue = 1;

    }
    else if(dropdown == 1){
      newvalue = 0;

    }
    setDropdown(newvalue);
    
  }

  function exportthis(){
    setDropdown(0);
  }

  

  
  return (
        
        <div className='collection'>
            <div className="collection-image-container" 
            style={
              {
                backgroundImage: `url(${props.thumbnail})`,
                backgroundSize: '100% auto',
                backgroundPosition: 'center',
              }
            }>
              <img className="collection-image" src={props.thumbnail} alt= "Photo"/>
            </div>
            
            <div className="nameand3dots">
             <div className='name-collection'>{props.name}</div>
             <button className='button3dots' onClick={dropdownhideshow}>
              <img className="collection3dots" src= {threedots} ></img>
             </button>
             
            </div>
            

            <div className = "collection-info">
              <div className='date-of-creation'>{props.dateOfCreation} {props.monthofCreation} {props.yearofCreation}</div>  
              <div className = 'total-photos' >{props.totalPhotos} photos</div> 
              <div className = 'status'>{props.status}</div> 

            </div>


            {dropdown == 1 && <CollectionDropdown/>}

            
           
            
             
        </div>

    
    
  )
}
