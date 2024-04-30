import React from 'react';
import '../styles/helpDropdown.css';

export default function HelpDropdown() {
  return (
    <div className='help-dropdown-main-container'>


        <div className='helpArticlesMainContainer'>
            <div className='helpArticlesHeading'>
                Uploading Images to client Gallery 
            </div>
            <div className='helpArticlesDescription'>
                Once you've created a Collection, you can start uploading images and this can be done with a few simple steps! If you’re interested in uploading videos specifically, check out our guide here.
                Having trouble uploading images? Please see our Troubleshooting Uploading and Processing Issues/Errors guide.
            </div>
        </div>
        <div className='helpArticlesMainContainer'>
            <div className='helpArticlesHeading'> 
                Creating Collections & Sets
            </div>
            <div className='helpArticlesDescription'>
                With KARTAISLE Client Gallery, you can create Collections of photos and videos for your clients to view. Within your collections, you can also create Sets to split photos and videos into different groups. For example, the photos within the Collection “Jenna & Ryan's Wedding Day” could be organized into different Sets, such as "Getting Ready", “Ceremony”, “Reception”, and "Portraits”.

            </div>
        </div>
        <div className='helpArticlesMainContainer'>
            <div className='helpArticlesHeading'>
                Creating Default Setting Templates for your Collections
            </div>
            <div className='helpArticlesDescription'>
                If you want to save time when creating Collections, particularly when you have specific settings you use regularly; Pixieset offers the option to create templates, saved as ‘defaults’ via our Collection Defaults feature. This allows you to save your preferences across the different Collection settings including Design, Privacy, Download, Favorite, and Store. Once you’ve created a Collection Default, you quickly apply your preferred Collection settings as a template when creating a new collection.
            </div>
        </div>

        <div className='browse-help-center'><a href="#">browse Help Center</a></div>

        <div className='contact-us-help-dropdown'>Contact Us</div>

    </div>
  )
}
