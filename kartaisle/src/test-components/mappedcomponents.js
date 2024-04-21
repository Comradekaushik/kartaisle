import React from 'react';
import Arraytexts from "./data";
import Box from './propspassing';

export default function Array() {
    const boxes23 = Arraytexts.map(
        (item,index)=>{
            return (<Box key = {index}  {...item}/>);
        }
    );
  return (
    <>
        {boxes23}
    
    </>


    
  )
}
