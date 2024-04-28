import React from 'react';
import "../styles/Editmodal.css";
import closeicon from '../resources/cross-svgrepo-com.svg'

export default function EditModal({props}) {
  return (

    <>
   

    <div className = "editmodal-main-container">


      <div className ="editmodal-subcontainer">


        <div className='editmodal-header'>


          <div className='editmodal-header-title'>Edit Collection</div>
          <div className='close-editmodal-button-container'>
              <button onClick={props} className='close-editmodal-button'>
                  <img className="closeicon-svg" src={closeicon}></img>
              </button>
          </div>



        </div>


        <div className='editmodal-form'>
          
          <div className='editmodal-input-field'>
            <div className='edit-collection-name-label'>Collection Name</div>
            <div><input className='edit-collection-name-input-field' type='text'/></div>
          </div>

          <div className='editmodal-input-field'>
            <div className='edit-collection-category-tag-label'>Category Tags</div>
            <div><input className='edit-collection-category-tag-field' type='text'/></div>
          </div>

          <div className='category-tags-instruction'>What kind of collection is this? Separate your tags with a comma. e.g. wedding, outdoor, summer.</div>

          <div>


            <div className='editmodal-input-field'>
              <div className='edit-collection-category-tag-label'>collection-url</div>
              <div>
                <input className='edit-collection-category-tag-field' type='text'/>
              </div>
            </div>

            <div className='category-tags-instruction'>What kind of url you want to give to the  collection like www.kartaisle.com/album/yourURL.</div>

            <div className='editmodal-input-field'>
              <div className='edit-collection-category-tag-label'>collection-url</div>
              <div>
                <input className='edit-collection-category-tag-field' type='text'/>
              </div>
            </div>
          </div>
          



          <div className='save-cancel-button-container'>


            <div><button className='cancel-button-editmodal'  onClick={props}>cancel</button></div>

            

            <div><button className='save-button-editmodal'>save</button></div>

          </div>


          
        </div>

        




      </div>
       


      
    
    </div>
    
    

    </>
    
  )
}
