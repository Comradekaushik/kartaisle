import React from 'react'

export default function Change(propsobject) {
  return (
    <>
        {/* <div>Change</div> */}
        <button onClick={()=>propsobject.textfunction((prev)=>{return({...prev,
            text : "yah changed"
        
        })})}>
            clickme
        </button>
    
    </>
    
  )
}
