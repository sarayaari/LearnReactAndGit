import React, { useEffect } from 'react'

function WeatherInfo(props) {
  return (
    <div className='container text-center mt-3'>
      <h2 className='display-4'>ewather of eilat</h2>
      <div>
        <h3>Condition:</h3>
        <h3>Tempereture:</h3>
        <h3>Wind:</h3>
      </div>
    </div>
  )
}

export default WeatherInfo

//{props.weather[0].description}
//{props.main.temp}
//{props.wind.speed}