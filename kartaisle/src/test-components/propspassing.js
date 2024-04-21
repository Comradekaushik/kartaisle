import React from 'react';
import Change from './propsedit';

export default function Box(props) {
    const [text,setText] = React.useState(props);
    const object = {
        textnow : text,
        textfunction : setText
    }
  return (
    <>
        <div>{text.text}</div>
        <Change {...object}/>
    </>
    
  )
}
