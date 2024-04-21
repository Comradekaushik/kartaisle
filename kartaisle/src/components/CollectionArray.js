import React from 'react';
import Collection from './Collection';
import CollectionData from '../Data/collectiondata';
import '../styles/collection.css';



const Collections = CollectionData.map((object)=>{return(<Collection {...object}/>) })
export default function CollectionArray() {
  return (
    <>
    <div className = "collections-supercontainer">
      {Collections}
    </div>
      
    </>
    
  )
}
