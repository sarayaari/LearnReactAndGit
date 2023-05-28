import React from 'react'
import { useSelector } from 'react-redux'
import AddTrip from './addTrip'
import Trip from './trip'
export default function TripsList() {

    const tripsList = useSelector((mystore) => mystore.tripsSlice.trips_arr)

    console.log(tripsList)

    return (
        <div className='col-6 mx-3'>
        <h2>list trip to choose :</h2>
            {tripsList[0] && tripsList.map((item, index) => {
                return (
                    <Trip key={index} item={item}></Trip>
                )
            })}
            {/* <AddTrip /> */}
        </div>
    )
}




