// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, useLocation } from 'react-router-dom';
// import HeaderHome from './components/HeaderHome';
// import Topbar from './components/Topbar';
// import Filterbar from './components/Filterbar';
// import CollectionArray from './components/CollectionArray';
import LoginPage from './components/loginsetup/LoginPage';
import Editor from './components/editor/editor';
// import Dummy from "./components/dummy";
import Gallery from './components/galleries/Gallery';
import GalleryDataArray from './Data/gallerydata2';

import CollectionPage from './components/collectionPage';








const Galleryprops = {
  sidebarprops : {
    galleryName: "Gallery first",
    galleryCreationDate : "13 Aug 2012",
    galleryStatus : "Published",
    galleryThumbnail : require("./content-images/griffin-wooldridge-aFMsnhkZoJg-unsplash.jpg"),
  },
  photosarrayprops : {
    array: [
      {
          image : require("./content-images/andrew-ly-iUA1cea8QiY-unsplash.jpg"),
          description : "Wolfie",
          
  
  
      },
      {
          image : require("./content-images/anton-maksimov-5642-su-vluzgh-TF5w-unsplash.jpg"),
          description: "Soviet medals",
          
  
  
      },
      {
          image : require("./content-images/chris-ensminger-i6yrDhfZ-XQ-unsplash.jpg"),
          description : "Angry wolfie will take the revenge God willing La Venganza",
         
  
  
      },
      {
          image : require("./content-images/chris-haws-IJ6JUJCXSrU-unsplash.jpg"),
          description : "Tree House",
          
  
      },
      {
          image : require("./content-images/clay-banks-djWyayb89V0-unsplash.jpg"),
          description : "Table and vase",
          
  
  
      },
      {
          image : require("./content-images/clay-banks-Y9iAaT2my2I-unsplash.jpg"),
          description : "Resting chair in a modern home",
          
  
  
      },
      {
          image : require("./content-images/cullan-smith-BdTtvBRhOng-unsplash.jpg"),
          description: "Burn it down my children",
          
  
      },
      {
          image : require("./content-images/griffin-wooldridge-aFMsnhkZoJg-unsplash.jpg"),
          description : "Moon seen through tree leaves",
          
  
  
      },
      {
          image : require("./content-images/logan-weaver-lgnwvr-tIozmRl49mM-unsplash.jpg"),
          description : "Whisky party stillhouse",
          
  
  
      },
      {
          image : require("./content-images/phillip-glickman-YOcoM5pF8ew-unsplash.jpg"),
          description : "Tea kettle in a desert",
          
  
  
      },
      {
          image : require("./content-images/vera-davidova-syADksVMrKk-unsplash.jpg"),
          description : "Arab man in a desert with a camel wearing keffiyah",
          
  
      },
      {
          image : require("./content-images/andrew-ly-iUA1cea8QiY-unsplash.jpg"),
          description : "Wolfie",
          
  
  
      },
      {
          image : require("./content-images/anton-maksimov-5642-su-vluzgh-TF5w-unsplash.jpg"),
          description: "Soviet medals",
          
  
  
      },
      {
          image : require("./content-images/chris-ensminger-i6yrDhfZ-XQ-unsplash.jpg"),
          description : "Angry wolfie will take the revenge God willing La Venganza",
         
  
  
      },
      {
          image : require("./content-images/chris-haws-IJ6JUJCXSrU-unsplash.jpg"),
          description : "Tree House",
          
  
      },
      {
          image : require("./content-images/clay-banks-djWyayb89V0-unsplash.jpg"),
          description : "Table and vase",
          
  
  
      },
      {
          image : require("./content-images/clay-banks-Y9iAaT2my2I-unsplash.jpg"),
          description : "Resting chair in a modern home",
          
  
  
      },
      {
          image : require("./content-images/cullan-smith-BdTtvBRhOng-unsplash.jpg"),
          description: "Burn it down my children",
          
  
      },
      {
          image : require("./content-images/griffin-wooldridge-aFMsnhkZoJg-unsplash.jpg"),
          description : "Moon seen through tree leaves",
          
  
  
      },
      {
          image : require("./content-images/logan-weaver-lgnwvr-tIozmRl49mM-unsplash.jpg"),
          description : "Whisky party stillhouse",
          
  
  
      },
      {
          image : require("./content-images/phillip-glickman-YOcoM5pF8ew-unsplash.jpg"),
          description : "Tea kettle in a desert",
          
  
  
      },
      {
          image : require("./content-images/vera-davidova-syADksVMrKk-unsplash.jpg"),
          description : "Arab man in a desert with a camel wearing keffiyah",
          
  
      }
  
  ]

    ,
  }

  



}






















function App() {

  
  return (


  

    
    // <>

    //   <HeaderHome/>
    //   <Topbar/>
    //   <Filterbar/>
    //   <CollectionArray/>
      
    // </>
    <BrowserRouter>
        


        <Routes>
         <Route path='/' element={<LoginPage/>} />
         <Route path='/collections' element={<CollectionPage/>} />
         <Route path='/editor' element={<Editor/>} />
         <Route path='/gallery1' element={<Gallery {...GalleryDataArray[0]}/>}/>
         <Route path='/gallery2' element={<Gallery {...GalleryDataArray[4]}/>}/>
        </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
