import React from 'react'
import './PhotoCard.css'
const PhotoCard = ({hdUrl, title , explanation, date}) => {
  return (
    <div className='photoCard'>
      <h1>Nasa  Astronomy Picture of the Day</h1>
      <div className="photo">
        <img src={hdUrl}alt="title"/>
      </div>
      <div className="photoData">

      <h2>Title : {title}</h2>
      <p>{ explanation}</p>
      <p>Date : { date}</p>
      
      </div>
    </div>
  )
}

export default PhotoCard
