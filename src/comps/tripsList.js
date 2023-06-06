import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AddTrip from './addTrip'
import Trip from './trip'
 import Dell from './Dell'
export default function TripsList() {

    const tripsList = useSelector((mystore) => mystore.tripsSlice.trips_arr)
    const nav = useNavigate()
    console.log(tripsList)

    const choiceGraphTrip = () => {
        nav("/choicesTrip")
    }

    return (
        <div className='col-6 mx-3 direction-rtl text-right'>
            <h2 className='my-5'>לבחירתך , הטיול האהוב עליך :)</h2>
            <button onClick={choiceGraphTrip} >גרף בחירה לטיול </button>
            {tripsList[0] && tripsList.map((item, index) => {
                return (
                    <Trip key={index} item={item}></Trip>
                )
            })}
            <Dell/>
            {/* <AddTrip /> */}
        </div>
    )
}




