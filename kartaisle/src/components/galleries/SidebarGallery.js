import React from 'react';
import editpencil from '../../resources/edit-icon-2.svg'






export default function SidebarGallery(props) {
  return (
    <>
        <div className='sidebar-container'>
            <div className='gallery-info'>

                

                    <div className='gallery-name-and-edit'>

                    
                        <div className='gallery-name'>
                            {props.galleryName}

                        </div>
                        <div className='gallery-edit-button-container'>
                            <button className='gallery-edit-button'>
                                <img src={editpencil} className='gallery-edit-button-icon'>
                                </img>


                            </button>

                        </div>
                    </div>

                    <div className='gallery-date-status'>
                        <div className='gallery-creation-date'>{props.galleryCreationDate}</div>
                        <div className="gallery-status">{props.galleryStatus}</div>

                    </div>
                
                
            </div>

            
            <div className='sidebar-gallery-thumbnail-container'>
                <img className='sidebar-gallery-thumbnail-img' src={props.galleryThumbnail}></img>
            </div>
            


            <div className='slideshow-btn-container'>
                <button className = 'gallery-slideshow-btn'>Slideshow</button>

            </div>
            



        </div>
    
    </>
  )
}
