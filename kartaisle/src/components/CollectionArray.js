import React from 'react';
import Collection from './Collection';
import CollectionData from '../Data/collectiondata';
import '../styles/collection.css';
import { Link } from 'react-router-dom';




// const Collections = CollectionData.map((object)=>{return(<Collection {...object}/>) });


const Collections = CollectionData.map((object, index) => {
  return (
    

    // <div className='collection'>


    <>
    
    
      {index % 2 === 0 ? (
          <Link to="/gallery1" className='LinkContainer'><Collection {...object} /></Link>
        ) : (
          <Link to="/gallery2" className='LinkContainer'><Collection {...object} /></Link>
        )}


    </>    
    
    // </div>
      
      
    
  );
});















export default function CollectionArray() {
  return (
    <>
    <div className = "collections-supercontainer">
      {Collections}
    </div>
      
    </>
    
  )
}
