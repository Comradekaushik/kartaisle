import React from 'react';
import PhotogridData from '../../Data/gallerydata';
import GridPhoto from './GridPhoto';
import '../../styles/Gallery.css';


export default function Photogrid(props) {
  // const GridPhotoArray  = PhotogridData.map((data)=>{return <GridPhoto {...data}/>});


  const GridPhotoArray  = props.array.map((data)=>{return <GridPhoto {...data}/>})



  return (
    <div className='Gallery-entire-right-part'>

        <div className='photogrid-header'>Photos</div>
        
        <div className='photogrid-supercontainer'>

          {GridPhotoArray}
        </div>
        

    </div>
    
  )
}
