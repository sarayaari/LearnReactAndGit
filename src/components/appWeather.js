import React, { useEffect,useState } from 'react'
import axios from "axios";
import { useSearchParams } from 'react-router-dom';
import WeatherForm from './weatherForm.js';
import WeatherInfo from "./weatherInfo.js";

function AppWeather() {

  let [info, setInfo]=useState();
  const [qeary]=useSearchParams();

  useEffect(() => {
    doApi(qeary.get("q")||"jerusalem");
  }, [qeary])

  const doApi = async (_city) => {
     let key="69549e6801c3a2d16225b2499aa7d3a4"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${_city}&APPID=${key}&units=metric`;
    let res = await axios.get(url)
    setInfo(res.data);
    console.log(res.data);
  }

  return (
    <div className="container" >
      <WeatherForm ></WeatherForm>
      { info  && <WeatherInfo info={info}></WeatherInfo>}
    </div>
  )
}

export default AppWeather
