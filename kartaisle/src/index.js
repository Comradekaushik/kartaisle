import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import HeaderHome from './components/HeaderHome';
import Topbar from './components/Topbar';
import Filterbar from './components/Filterbar';
import CollectionArray from './components/CollectionArray';
import GalleryDataArray from './Data/gallerydata2';
import Gallery from './components/galleries/Gallery';

import reportWebVitals from './reportWebVitals';


import Array from './test-components/mappedcomponents';
import Canvas from './components/editor/canvas';
import Editor from './components/editor/editor';










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







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <HeaderHome/>
    <Topbar/>
    <Filterbar/>
    <CollectionArray/> */}

    {/* <Array/> */}

    <App/>
    {/* <Gallery {...Galleryprops}/> */}

    {/* <Gallery {...GalleryDataArray[0]}/> */}

    
    {/* <Editor/> */}

    
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
