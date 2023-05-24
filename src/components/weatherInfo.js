import React, { useEffect } from 'react'

function WeatherInfo(props) {
  let info = props.info;
  // let srcImg = "http://openweathermap.org/img/w/10d.png"
  let srcImg = `http://openweathermap.org/img/w/${info.weather[0].icon}.png`

  return (
    <div className='container text-center mt-3'>
      <h2 className='display-4'>ewather of {info.name}</h2>
      <div>
        <img src={srcImg} alt="imaneWaether"></img>
        <h3>Condition:{info.weather[0].description}</h3>
        <h3>Tempereture:{info.main.temp}</h3>
        <h3>Wind:{info.wind.speed}</h3>
      </div>
    </div>
  )
}

export default WeatherInfo
