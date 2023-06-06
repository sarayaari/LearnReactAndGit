import React from 'react'
import { useDispatch } from 'react-redux'
import { addTrip } from '../featurs/TripsSlice';


export default function AddTrip() {
 
    const dispatch = useDispatch();
    let trip = { name: "newTrip" }

    const addNewTrip = (e) => {
        dispatch(addTrip({newTrips:{name:" new trip"}})) 
    }

    return (
        <div>
            <button onClick={addNewTrip}>addItem</button>
            AddTrip
        </div>
    )
}
