import React, { useEffect,useState } from 'react'
import WeatherForm from './weatherForm.js';
import WeatherInfo from "./weatherInfo.js";
import axios from "axios";
function AppWeather() {
  let [info, setInfo]=useState();
  useEffect(() => {
    doApi();
  }, [])
  const doApi = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Tel%20aviv&APPID=69549e6801c3a2d16225b2499aa7d3a4&units=metric`;
    let res = await axios.get(url)
    setInfo(res.data);
    console.log(res.data);
  }

  return (
    <div className="container" >
      <WeatherForm></WeatherForm>
      <WeatherInfo></WeatherInfo>
    </div>
  )
}

export default AppWeather
