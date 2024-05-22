import React from 'react';
import HeaderHome from '../HeaderHome';
import SidebarGallery from './SidebarGallery';
import Photogrid from './Photogrid';
import '../../styles/sidebargallery.css';



// const Galleryprops = {
//     sidebarprops : {
//       galleryName: "Gallery first",
//       galleryCreationDate : "13 Aug 2012",
//       galleryStatus : "Published",
//       galleryThumbnail : require("../.././content-images/griffin-wooldridge-aFMsnhkZoJg-unsplash.jpg"),
//     },
//     photosarrayprops : {
//       array: [
//         {
//             image : require("../../content-images/andrew-ly-iUA1cea8QiY-unsplash.jpg"),
//             description : "Wolfie",
            
    
    
//         },
//         {
//             image : require("../../content-images/anton-maksimov-5642-su-vluzgh-TF5w-unsplash.jpg"),
//             description: "Soviet medals",
            
    
    
//         },
//         {
//             image : require("../../content-images/chris-ensminger-i6yrDhfZ-XQ-unsplash.jpg"),
//             description : "Angry wolfie will take the revenge God willing La Venganza",
           
    
    
//         },
//         {
//             image : require("../../content-images/chris-haws-IJ6JUJCXSrU-unsplash.jpg"),
//             description : "Tree House",
            
    
//         },
//         {
//             image : require("../../content-images/clay-banks-djWyayb89V0-unsplash.jpg"),
//             description : "Table and vase",
            
    
    
//         },
//         {
//             image : require("../../content-images/clay-banks-Y9iAaT2my2I-unsplash.jpg"),
//             description : "Resting chair in a modern home",
            
    
    
//         },
//         {
//             image : require("../../content-images/cullan-smith-BdTtvBRhOng-unsplash.jpg"),
//             description: "Burn it down my children",
            
    
//         },
//         {
//             image : require("../../content-images/griffin-wooldridge-aFMsnhkZoJg-unsplash.jpg"),
//             description : "Moon seen through tree leaves",
            
    
    
//         },
//         {
//             image : require("../../content-images/logan-weaver-lgnwvr-tIozmRl49mM-unsplash.jpg"),
//             description : "Whisky party stillhouse",
            
    
    
//         },
//         {
//             image : require("../../content-images/phillip-glickman-YOcoM5pF8ew-unsplash.jpg"),
//             description : "Tea kettle in a desert",
            
    
    
//         },
//         {
//             image : require("../../content-images/vera-davidova-syADksVMrKk-unsplash.jpg"),
//             description : "Arab man in a desert with a camel wearing keffiyah",
            
    
//         },
//         {
//             image : require("../../content-images/andrew-ly-iUA1cea8QiY-unsplash.jpg"),
//             description : "Wolfie",
            
    
    
//         },
//         {
//             image : require("../../content-images/anton-maksimov-5642-su-vluzgh-TF5w-unsplash.jpg"),
//             description: "Soviet medals",
            
    
    
//         },
//         {
//             image : require("../../content-images/chris-ensminger-i6yrDhfZ-XQ-unsplash.jpg"),
//             description : "Angry wolfie will take the revenge God willing La Venganza",
           
    
    
//         },
//         {
//             image : require("../../content-images/chris-haws-IJ6JUJCXSrU-unsplash.jpg"),
//             description : "Tree House",
            
    
//         },
//         {
//             image : require("../../content-images/clay-banks-djWyayb89V0-unsplash.jpg"),
//             description : "Table and vase",
            
    
    
//         },
//         {
//             image : require("../../content-images/clay-banks-Y9iAaT2my2I-unsplash.jpg"),
//             description : "Resting chair in a modern home",
            
    
    
//         },
//         {
//             image : require("../../content-images/cullan-smith-BdTtvBRhOng-unsplash.jpg"),
//             description: "Burn it down my children",
            
    
//         },
//         {
//             image : require("../../content-images/griffin-wooldridge-aFMsnhkZoJg-unsplash.jpg"),
//             description : "Moon seen through tree leaves",
            
    
    
//         },
//         {
//             image : require("../../content-images/logan-weaver-lgnwvr-tIozmRl49mM-unsplash.jpg"),
//             description : "Whisky party stillhouse",
            
    
    
//         },
//         {
//             image : require("../../content-images/phillip-glickman-YOcoM5pF8ew-unsplash.jpg"),
//             description : "Tea kettle in a desert",
            
    
    
//         },
//         {
//             image : require("../../content-images/vera-davidova-syADksVMrKk-unsplash.jpg"),
//             description : "Arab man in a desert with a camel wearing keffiyah",
            
    
//         }
    
//     ]

//       ,
//     }

    



// }



const galleryobject = {
    galleryName: "Gallery first",
    galleryCreationDate : "13 Aug 2012",
    galleryStatus : "Published",
    galleryThumbnail : require("../.././content-images/griffin-wooldridge-aFMsnhkZoJg-unsplash.jpg"),
}

// export default function Gallery() {
//   return (
//     <div className='gallery-super-container'>
//         <HeaderHome/>
//         {/* <SidebarGallery {...galleryobject}/> */}
//         <SidebarGallery {...Galleryprops.sidebarprops}/>
//         <Photogrid {...Galleryprops.photosarrayprops}/>
    
//     </div>
//   )
// }


export default function Gallery(props) {

  const [showSavedPics,setShowSavedPics] = React.useState(0);
  // return (
    
  //   <div className='gallery-super-container'>
  //       <HeaderHome/>
        
  //       <SidebarGallery {...props.sidebarprops} showfavorites={setShowSavedPics} showfavoritescurrentvalue={showSavedPics}/>
  //       <Photogrid {...props.photosarrayprops}/>
    
  //   </div>
  // )


  const [likedimgarr,setlikedimgarr] = React.useState(props.photosarrayprops.likedarray);

  
  

  if(showSavedPics === 0){
    return(
        <div className='gallery-super-container'>
          <HeaderHome/>
          
          <SidebarGallery {...props.sidebarprops} showfavorites={setShowSavedPics} showfavoritescurrentvalue={showSavedPics}/>
          <Photogrid {...props.photosarrayprops} setLikedImgArr = {setlikedimgarr} Likedimgarr = {likedimgarr} showfavoritescurrentvalue = {showSavedPics} />

          
    
        </div>

    )
  }
  else if(showSavedPics === 1){
    return(
      <div className='gallery-super-container'>
        <HeaderHome/>
        
        <SidebarGallery {...props.sidebarprops} showfavorites={setShowSavedPics} showfavoritescurrentvalue={showSavedPics}/>
        <Photogrid {...props.photosarrayprops} setLikedImgArr = {setlikedimgarr} Likedimgarr = {likedimgarr} showfavoritescurrentvalue = {showSavedPics}  />
  
      </div>

    )

  }
}
