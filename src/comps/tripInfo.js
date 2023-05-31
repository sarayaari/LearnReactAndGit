import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';




export default function TripInfo() {

    let [iconWeather, setIconWeather] = useState("");
    let [point_ar, setPoint_ar] = useState([])
    let urlIcon = `http://openweathermap.org/img/wn/${iconWeather}.png`
    const trip = useSelector(state => state.tripsSlice.selectTrip);

    const extractSubArray = (obj) => {
        return obj.points
    }

    const initPoints = () => {
        const extractedPoints = trip.places.map((item) => extractSubArray(item));
        console.log(extractedPoints)
        setPoint_ar([extractedPoints]);
    }

    useEffect(() => {
       
    }, [point_ar])

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

    }, [])

    return (
        <div className='container col-md-11 my-1 '>
            {trip.name ? <div className='   row'>
                <div class="card" style={{ width: "90rem" }}>
                    <MapContainer className='my-1' center={[33.14446296159706, 35.758267777718935]} zoom={11} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                         { point_ar[0] && point_ar[0].map((item, index) => {
                            return (<Marker key={index} position={item}></Marker>)
                        })
                        }
                    </MapContainer>
                    <div >
                        <div class="card-body">
                            <div className='col-12 col-md-6 order-md-1'>
                                {iconWeather ? <img className='img-fluid ml-auto ' src={urlIcon}
                                    alt='iconWeather' style={{ width: "18em" }} />
                                    : <h2>fail :(</h2>}
                            </div>

                            <h5 class="card-title">{trip.name}</h5>
                            <p class="card-text">{trip.Description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            {trip.places && trip.places.map((item, index) => {
                                return (
                                    <li key={index} class="list-group-item"> {item.name} </li>
                                )
                            })}

                        </ul>
                        <div class="card-body">
                            {/* 
                        <a href="#" class="card-link">go</a>
                        <a href="#" class="card-link">Another link</a> */}
                        </div>
                    </div>

                </div>
            </div> : <p>fail, try egain more later</p>}
        </div>

    )
}


