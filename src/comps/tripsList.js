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
        <div className='container  '>
            <div className=' '>
                <div className='row  ' >
                <div className='row justify-content-between'>
                <button className='col-2 btn btn-primary cl-1 ms-8' onClick={choiceGraphTrip} > גרף  בחירות  </button>

                    <h2 style={{textAlign:"right"}} className='col-10 textAlign:rigth  my-1 h2'> יש מבחר , בחר את האהוב עליך ביותר</h2>
                    </div>
                    <div className='row  justify-content-between mt-4 ' >
                        {tripsList[0] && tripsList.map((item, index) => {
                            return (
                                <Trip key={index} item={item}></Trip>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}




