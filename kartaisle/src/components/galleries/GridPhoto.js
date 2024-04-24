import React from 'react'
import '../../styles/photoofthegrid.css'

export default function GridPhoto(props) {
  return (
    <div className='container-photo-gridphoto'>
        <img src={props.image} className='photosofthegrid'></img>

    </div>
  )
}
