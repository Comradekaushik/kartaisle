import React from 'react';
import '../../styles/photoofthegrid.css';

import cross from'../../resources/cross-white.svg';

export default function GridPhoto(props) {

  const [showInDetail,setShowinDetail] = React.useState(0);
  function handleDetail(){
    if(showInDetail === 0){
      setShowinDetail(1);
    }
    else if(showInDetail === 1){
      setShowinDetail(0);
    }
  }
  return (
    <div className='container-photo-gridphoto' onClick={handleDetail}>
        <img src={props.image} className='photosofthegrid'></img>



        {showInDetail === 1 && 

        <div className='gridphoto-viewindetail'>
            <img src={props.image} className='viewindetail-photosofthegrid'></img>

            <div className='close-viewindetail-container'>
              
              
              <button className="close-viwindetail-button" onClick={handleDetail}>
                
                <img className="close-viwindetail-icon" src={cross}></img>
                
              </button>
            </div>
        </div> }

    </div>
  )
}
