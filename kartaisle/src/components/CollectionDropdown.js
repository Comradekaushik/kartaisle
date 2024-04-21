import React from 'react';
import '../styles/collection.css';
import EditModal from './EditModal';
import sharesvg from "../resources/share-svgrepo-com.svg";
import deletesvg from "../resources/delete-2-svgrepo-com.svg";
import editsvg from "../resources/edit-1-svgrepo-com.svg";
import addsvg from "../resources/add-ellipse-svgrepo-com.svg"

export default function CollectionDropdown() {
  const[modal,setvisibilitymodal] = React.useState(0);
  function modalhideshow(){
    let value = 0;
    if(modal == 0){
      value = 1;
      // console.log("should show");

    }
    else if(modal == 1){
      value = 0;

    }
    setvisibilitymodal(value);
    // console.log(modal);
  }


  function hidemodal(){
    setvisibilitymodal(0);

  }
  return (

   

    
    <div className="CollectionDropdowns">
       {/* <div className='dropdownrows'>
          <img className="editdropdown" src={editsvg}/>
          <div className='dropdown-optiontitle'>Edit</div>

        </div>  */}
        <div className='dropdownrows'>
          <button className='editButton' onClick={modalhideshow}>
            <img className="editdropdown" src={editsvg}/>
             <div className='dropdown-optiontitle'>Edit</div>
          </button>
          

        </div> 
        <div className='dropdownrows'>
          <img className="sharedropdown" src={sharesvg}/>
          <div className='dropdown-optiontitle'>Share</div>

        </div>

        <div className='dropdownrows'>
          <img className="adddropdown" src={addsvg}/>
          <div className='dropdown-optiontitle'>Add Photos</div>

        </div>
        
        
        <div className='dropdownrows'>
          <img className="deletedropdown" src={deletesvg}/>
          <div className='dropdown-optiontitle'>Delete</div>

        </div>
        {/* <EditModal/> */}

        {modal == 1 && <EditModal   props =  {hidemodal}/>}

        
    
    
    </div>
  )
}
