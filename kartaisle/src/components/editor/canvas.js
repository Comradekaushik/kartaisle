import React from 'react';
// import React, { useRef, useEffect, useState } from 'react';
import '../../styles/canvas.css';

export default function Canvas(props) {
    const canvasRef = React.useRef(null);
    const[imagesource,setImagesource] = React.useState(props);

    const displayimgRef = React.useRef(null);

    
    React.useEffect(() => {


        const photo = displayimgRef.current;


        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const image = new Image();
        image.src = props.imagesrc;
        // image.src = imagesource.imagesrc;
       
        image.onload = () => {
            canvas.height = image.naturalHeight;
            
            canvas.width = image.naturalWidth;
            


            // context.filter = "blur(10px) ";
            // photo.style.filter = "blur(10px)";


            // context.filter = "brightness(220%)";
            // photo.style.filter = "brightness(220%)";

            context.filter = "grayscale(100%)";
            photo.style.filter = "grayscale(100%)";




            // photo.style.transform = 'rotate(90deg)';
            // context.rotate(90 * Math.PI / 180);



            
            

            
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            context.font = "45px Arial"; // Set font size and family
            context.fillStyle = "white"; // Set text color
            context.fillText("Hello, Canvas!", 50, 50); // Display text
        };
        
        //Our first draw
        // context.fillStyle = '#0000FF';
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      }, [props]);

      const handleDownload = () => {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          context.fillText("watermark!", 100, 100);

          const x = canvas.width; // Right edge of the canvas
          const y = canvas.height; // Bottom edge of the canvas


          context.textAlign = "end"; // Set right alignment
          context.fillText("KARTAISLE", x - 10, y - 10); // Draw text at the bottom-right corner
        
          const dataURL = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.download = "image-kartaisle.png"; 
          link.href = dataURL;
          link.click();
        
      };
    return (

        <>
             <img className="displayImage" src={props.imagesrc}  ref={displayimgRef}/>
             <canvas className='editingCanvas' ref={canvasRef} />

             <div className='filter-buttons-container'>
                <button className='grayscale-button'> Grayscale </button>
                
                
                <button className='brightness-button'>Brightness</button>
                <button className='contrast-button'>Contrast</button>

                <button className='saturate-button'>Saturate</button>

                <button className='sepia-button'>Sepia</button>

                
             </div>

             <div className='editor-download-button-container'>
                <button className='editor-download-button' onClick={handleDownload}>Download</button>
             </div>
        
        </>
    
  
        
        
    
    )
}
