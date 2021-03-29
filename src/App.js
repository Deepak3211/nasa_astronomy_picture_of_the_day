import { useEffect, useState } from 'react';
import './App.css';
import PhotoCard from './components/PhotoCard';

function App() {
  const [picture, setPicture] = useState([]);
// console.log(picture);
  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2021-03-28`)
      
      .then(response => response.json())
      .then(responseData => {
      // console.log(responseData.sort().reverse());
        setPicture(responseData.sort().reverse())
        
    })
    
  },[])
  return (
    <div className="app">

      
{/* 
      <PhotoCard
        hdUrl = ''
        title = 'Hey'
        explanation = 'lorem'
        date = '2020-02-23'
      
      /> */}

      {picture.map((photo) => (
        <PhotoCard
          key={photo.title}
          hdUrl={photo.hdurl}
          title = {photo.title}
          explanation = {photo.explanation}
          date = {photo.date}
        />
      ))}
    </div>

  );
}

export default App;
