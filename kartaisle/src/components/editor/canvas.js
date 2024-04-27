import React from 'react';

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
        
       
        image.onload = () => {
            canvas.height = image.naturalHeight;
            
            canvas.width = image.naturalWidth;
            


            // context.filter = "blur(10px) ";
            // photo.style.filter = "blur(10px)";


            // context.filter = "brightness(220%)";
            // photo.style.filter = "brightness(220%)";

            // context.filter = "grayscale(100%)";
            // photo.style.filter = "grayscale(100%)";




            // photo.style.transform = 'rotate(90deg)';
            // context.rotate(90 * Math.PI / 180);



            
            

            
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            context.font = "45px Arial"; // Set font size and family
            context.fillStyle = "white"; // Set text color
            // context.fillText("Hello, Canvas!", 50, 50); // Display text
            console.log("onload ran");
        };
        
        //Our first draw
        // context.fillStyle = '#0000FF';
        // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      }, [props]);

      const handleDownload = () => {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');

          context.font = "45px Arial"; // Set font size and family
          context.fillStyle = "white"; // Set text color
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
        //   alert('downloaded');
        
      };

      function GrayscaleFilter(){
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const photo = displayimgRef.current;
        const image = new Image();
        image.src = props.imagesrc;
        image.onload = () => {
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;
            context.filter = "grayscale(100%)";
            photo.style.filter = "grayscale(100%)";
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            console.log("mission accomplished");
        };
      }

      function BrightnessFilter(){
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const photo = displayimgRef.current;
        const image = new Image();
        image.src = props.imagesrc;
        image.onload = () => {
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;
            context.filter = "brightness(200%)";
            photo.style.filter = "brightness(200%)";
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            console.log("mission accomplished");
        };
        

      }
      function ContrastFilter(){
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const photo = displayimgRef.current;
        const image = new Image();
        image.src = props.imagesrc;
        image.onload = () => {
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;
            context.filter = "contrast(200%)";
            photo.style.filter = "contrast(200%)";
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            console.log("mission accomplished");
        };
        

      }
      function SaturateFilter(){
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const photo = displayimgRef.current;
        const image = new Image();
        image.src = props.imagesrc;
        image.onload = () => {
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;
            context.filter = "saturate(8)";
            photo.style.filter = "saturate(8)";
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            console.log("mission accomplished");
        };

      }
      function SepiaFilter(){
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const photo = displayimgRef.current;
        const image = new Image();
        image.src = props.imagesrc;
        image.onload = () => {
            canvas.height = image.naturalHeight;
            canvas.width = image.naturalWidth;
            context.filter = "sepia(100%)";
            photo.style.filter = "sepia(100%)";
            context.drawImage(image, 0, 0, canvas.width, canvas.height);
            console.log("mission accomplished");
        };

      }
    return (

        <>
             <img className="displayImage" src={props.imagesrc}  ref={displayimgRef}/>
             <canvas className='editingCanvas' ref={canvasRef} />

             <div className='filter-buttons-container'>
                <button className='grayscale-button' onClick={GrayscaleFilter}> Grayscale </button>
                
                
                <button className='brightness-button' onClick={BrightnessFilter}>Brightness</button>
                <button className='contrast-button' onClick={ContrastFilter}>Contrast</button>

                <button className='saturate-button' onClick={SaturateFilter}>Saturate</button>

                <button className='sepia-button' onClick={SepiaFilter}>Sepia</button>

                
             </div>

             <div className='editor-download-button-container'>
                <button className='editor-download-button' onClick={handleDownload}>Download</button>
             </div>
        
        </>
    
  
        
        
    
    )
}
