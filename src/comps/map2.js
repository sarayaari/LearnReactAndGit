import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import { Icon } from 'leaflet';
import { click } from '@testing-library/user-event/dist/click';

const myIcon = new Icon({
    iconUrl: "/images/icon_pizza.png ",
    iconSize: [30, 45],
    iconAnchor: [15, 45],
    popupAnchor: [0, -40],
    tooltipAnchor: [0, -20]
})

export default function Map2() {

    let [mark_ar, setMark_ar] = useState(points);

    return (
        <div>
            <MapContainer center={[31.776901, 35.2345728]} zoom={17} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {mark_ar && mark_ar.map((item, index) => {
                    return (
                        <Marker eventHandlers={{
                            click: () => { window.open(item.link) }
                        }} key={index} position={item.position} icon={myIcon}>
                            <Popup>{item.titel} </Popup>
                            <Tooltip>{item.placeName}</Tooltip>
                        </Marker>
                    )
                })}
            </MapContainer>
        </div>
    )
}


const points = [
    {
        placeName: "westerwool",
        link: "https://thekotel.org/en/",
        position: [31.776883045754442, 35.23450850401636],
        titel: "this place is westerwool "
    },
    {
        placeName: " מינהרות הכותל",
        link: "https://thekotel.org/he/tourtype/western_wall_sites/",
        position: [31.777302594219954, 35.23454069052402],
        titel: "כאן הכניסה למנהרות הכותל המערבי ,ברוך הבא"
    },
    {
        placeName: "מסעדת בין הקשתות ",
        link: "https://www.betweenarches.co.il/",
        position: [31.777457644258195, 35.23321031487401],
        titel: "כאן תמצאו אוכל טעים "
    },
]
