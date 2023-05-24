import React, { useRef, useState } from 'react'
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { useMap } from 'react-leaflet';


export default function Map3() {
    let [point, setPoint] = useState([31.9324487, 35.0433428]);

    let searchProvaider = new OpenStreetMapProvider();
    let inputRef = useRef();
    const onclickSearch = () => {
        doSearchAddress()
    }
    const initPpoint = (_Point) => {

        // let point = {
        //     position: [_Point.x, _Point.y],
        //     bounds: _Point.bounds,
        //     label: _Point.label,
        // }
        setPoint([_Point.y,_Point.x])
        // setPoint(point)
    }
    const doSearchAddress = async () => {
        let valueInput = inputRef.current.value;
        let resalt = await searchProvaider.search({ query: valueInput })
        if (resalt[0]) {
            console.log(resalt[0])
            initPpoint(resalt[0])
        } else
            console.log("error")

    }

    return (
        <div className='container '>
            <h2>serach place on map</h2>
            <div className='col-md-6 mx-auto d-flex'>
                <input onKeyDown={(e)=>{
                    if(e.key=="Enter")
                    onclickSearch();
                }} ref={inputRef} type='search' className='form-control ' placeholder="search ..."></input>
                <button onClick={onclickSearch} className='btn btn-info'>Search</button>
            </div>
            <MapContainer center={point} zoom={17} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
             <SearchMap point={point} ></SearchMap>
            </MapContainer>
        </div>
    )
}
  const SearchMap=(props)=>{
     let map=useMap();
     map.flyTo(props.point)
    return(
        <Marker position={props.point }>
        <Popup> המקום המבוקש</Popup>
    </Marker>
    )
  }
