import React from 'react';
import Canvas from './canvas';
import '../../styles/editor.css'
export default function Editor() {
  
    const [file, setFile] = React.useState();
    // const [file2, setFile2] = React.useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        // setFile2(URL.createObjectURL(e.target.files[1]));
    }

    const canvasprops = {
        imagesrc : file
    }
    
 
    return (
        <>
            <div className="App">
                <h2>Add Image:</h2>
                <input type="file" onChange={handleChange} multiple />
                {/* <img src={file} /> */}
                
            </div>


            {/* <div className='editor-img-canvas-container'>
                <Canvas {...canvasprops}/>
            </div> */}

            <div className='editor-img-canvas-container'>
                <Canvas {...canvasprops}/>
            </div>

            
            

        
        </>
        
    );
  
}
