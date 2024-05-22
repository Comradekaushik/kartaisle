import React from 'react';
import PhotogridData from '../../Data/gallerydata';
import GridPhoto from './GridPhoto';
import '../../styles/Gallery.css';


export default function Photogrid(props) {
  // const GridPhotoArray  = PhotogridData.map((data)=>{return <GridPhoto {...data}/>});

  // const [likedimgarr,setlikedimgarr] = React.useState(props.likedarray);
  // const GridPhotoArray  = props.array.map((data)=>{return <GridPhoto {...data} setLikedImgArr={setlikedimgarr} Likedimgarr={likedimgarr}/>});


  const GridPhotoArray  = props.array.map((data)=>{return <GridPhoto {...data} setLikedImgArr={props.setLikedImgArr} Likedimgarr={props.Likedimgarr}/>});
  
  console.log(props.Likedimgarr);


  const uniqueLikedimgarr = [...new Set(props.Likedimgarr)];
  



  // const LikedPhotoArray  = props.Likedimgarr.map((data)=>{return <GridPhoto {...data} setLikedImgArr={props.setLikedImgArr} Likedimgarr={props.Likedimgarr}/>});

  const LikedPhotoArray  = uniqueLikedimgarr.map((data)=>{return <GridPhoto {...data} setLikedImgArr={props.setLikedImgArr} Likedimgarr={props.Likedimgarr}/>});


  if (props.showfavoritescurrentvalue === 1){
    return (
      <div className='Gallery-entire-right-part'>

          <div className='photogrid-header'>Favorites Photos</div>
        
          <div className='photogrid-supercontainer'>

            {LikedPhotoArray}
          </div>
        

      </div>

    )
  }


  else{
    return (
      <div className='Gallery-entire-right-part'>

          <div className='photogrid-header'>Photos</div>
          
          <div className='photogrid-supercontainer'>

            {GridPhotoArray}
          </div>
          

      </div>
    
    )
  }
}
