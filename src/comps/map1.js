import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
 import { Icon } from 'leaflet';

 const myIcon = new Icon({
    iconUrl: "/images/icon_pizza.png ",
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    popupAnchor: [0, -40],
    tooltipAnchor: [0,-20]
  })
  
export default function Map1() {
    return (
        <div className="container ">
            <MapContainer center={[31.9365, 35.0368]} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker eventHandlers={{
                    click:()=>{
                        alert("i here")
                    }
                }} position={[31.936774387104208, 35.039803880193396]}> <Popup ><a href='https://www.google.co.il/maps/search/%D7%9E%D7%95%D7%93%D7%99%D7%A2%D7%99%D7%9F+%D7%A2%D7%99%D7%9C%D7%99%D7%AA+nxu;%E2%80%AD/@31.935788,35.0397569,17z' target='_blank'>
                15 נתיבות שלום </a>
                </Popup>  </Marker>
                <Marker position={[31.9365, 35.0368]} icon={myIcon} >
                 <Popup>מסוף</Popup>
                 <Tooltip> in moov mause</Tooltip>
                   </Marker>


            </MapContainer>
            {/* <img src={a} alt="logo"></img> */}
        </div>


    )
}
