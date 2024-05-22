import React from 'react';
import '../../styles/photoofthegrid.css';

import cross from'../../resources/cross-white.svg';
import save from '../../resources/save-2-svgrepo-com.svg';
import FilledSave from '../../resources/newsavefilled.svg'

export default function GridPhoto(props) {
  // console.log(props.description);

  const [showInDetail,setShowinDetail] = React.useState(0);
  function handleDetail(event){
    event.stopPropagation();
    
    if(showInDetail === 0){
      setShowinDetail(1);
    }
    else if(showInDetail === 1){
      setShowinDetail(0);
    }
  }
  function showdetailedview(){
    setShowinDetail(1);

  }
  

  const [issaved,setSaved] = React.useState(0);
  function saveunsave(){
    
    if(issaved === 0){
      setSaved(1);
      const newimgaddtolikedimgarray ={
        image : props.image,
        description : props.description
      }
      // props.setLikedImgArr([...props.Likedimgarr,newimgaddtolikedimgarray]);
      props.setLikedImgArr([...props.Likedimgarr,newimgaddtolikedimgarray]);
      console.log(props.Likedimgarr);
    }
    else if(issaved === 1){
      setSaved(0);
    }
    

    
  }
  return (
    <div className='container-photo-gridphoto' onClick={showdetailedview}>
        <img src={props.image} className='photosofthegrid'></img>



        {showInDetail === 1 && 

        <div className='gridphoto-viewindetail'>
            <img src={props.image} className='viewindetail-photosofthegrid'></img>

            <div className='close-viewindetail-container'>
              
              
              <button className="close-viewindetail-button" onClick={handleDetail}>
                
                <img className="close-viewindetail-icon" src={cross}></img>
                
              </button>
            </div>
            <div className='likebar'>
              { issaved === 0 && <img className='save-icon' src={save} onClick={saveunsave}></img> }

              { issaved === 1 && <img className='save-icon' src={FilledSave} onClick={saveunsave}></img> }
              
              
            </div>
        </div> }

    </div>
  )
}
