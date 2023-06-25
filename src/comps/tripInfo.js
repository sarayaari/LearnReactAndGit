import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MapContainer,TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';




export default function TripInfo() {
    let [iconWeather, setIconWeather] = useState("");
    let [point_ar, setPoint_ar] = useState([])
    let nav=useNavigate();
    let urlIcon = `http://openweathermap.org/img/wn/${iconWeather}.png`
    const trip = useSelector(state => state.tripsSlice.selectTrip);

    const extractSubArray = (obj) => {
        return obj.points
    }

    const initPoints = () => {
        const extractedPoints = trip.places.map((item) => extractSubArray(item));
        console.log(extractedPoints)
        debugger;
        setPoint_ar([extractedPoints]);
    }


    useEffect(() => {
        initPoints()
        const urlWeather = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=69549e6801c3a2d16225b2499aa7d3a4&units=metric"
        axios.get(urlWeather)
            .then(res => {
                setIconWeather(res.data.weather[0].icon)
                console.log(res.data.weather[0].icon)
            }).catch(erro => {
                console.log(erro)
            })
        console.log(trip)
 
    }, [])

    const onclickBack=()=>{
          nav("/")
     }

    return (
      <div className='container   col-11 my-1 justify-content-between ' style={{height:"60vh" }}  >
      {trip.name ? <div className='row  justify-content-between'>
    <div class="col-5 m-1   "> 
    {/* card  mb-2       style={{ width: "50rem", height:"60vh" }}     */}
     <div className='' style={{width:"90%", height:"9vh" }}> <img src='https://www.parks.org.il/wp-content/themes/joomi/inc/imgp.php?src=https://static.parks.org.il/wp-content/uploads/2022/04/%D7%AA%D7%9C-%D7%93%D7%95%D7%A8-%D7%A6%D7%99%D7%9C%D7%9D-%D7%90%D7%99%D7%9C-%D7%A9%D7%A4%D7%99%D7%A8%D7%90.jpg&width=604&height=417&co=8&q=60' alt='imgTrip'></img></div>
    </div>
<div className='col-6 m-1   '>  
<div className='row' >
    <div className='card-body col-2 m-1  ' style={{ height:"32em"}}>
        <MapContainer className='my-1' style={{ height:"31em"}} center={[32.79600827405755, 34.985362867882145]} zoom={6.5} scrollWheelZoom={true}>       
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /> 
             { point_ar[0] && point_ar[0].map((item, index) => {
                return (<Marker key={index} position={item}>            
                      <Popup>{trip.places[index].name}</Popup>
                </Marker>)
            })
            }
        </MapContainer>
        </div>
        <div  className='col-8 pl-5  '>
            <div class="textAlign-right m-3">
                <div className='col-12 col-md-6 '>
                    {iconWeather ? <img className='img-fluid ml-auto ' src={urlIcon}
                        alt='iconWeather' style={{ width: "3em" }} />
                        : <h2>fail :(</h2>}
                </div>
                <h5 class="card-title mb-1 ">{trip.name}</h5>
                <p class="card-text mb-1 ">{trip.Description}</p>
            </div>
            <ul class="list-group  list-group-flush m-3">
                {trip.places && trip.places.map((item, index) => {
                    return (
                        <li key={index} class="mb-1 list-group-item"> {item.name} </li>
                    )
                })}
            </ul>
            <div class=" m-4">
            <button onClick={onclickBack} >חזרה לדף הבית</button>
                {/* 
            <a href="#" class="card-link">go</a>
            <a href="#" class="card-link">Another link</a> */}
             </div>
            </div>
    </div>  
    </div>
        </div>
 : <p>fail, try egain more later</p>}
</div>)}

 

















