import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {selectTrip} from "../featurs/TripsSlice"

const TRACK_TYPE = " סוג מסלול ";
const DIFFICULTY = "דרגת קושי"

export default function Trip(props) {
  const dispatch=useDispatch();

  const nav = useNavigate();
  const propItem = props.item;

  const onClickMore = () => {
    console.log(propItem.id)
    dispatch(selectTrip({trip_id:propItem.id}))
     nav(`/tripInfo/${propItem.id}`);
  }

  return (
    <div className='card  cl-3  direction-rtl text-right '>
      <h5 className='card-header'>{propItem.name}</h5>
      <div className='card-body'>
        <span class="badge bg-primary rounded-pill float-end ">14</span>
        <h5 class="card-title"> {TRACK_TYPE}:{propItem.kind}</h5>
        <p class="card-text">{DIFFICULTY}:{propItem.Difficulty}</p>
        <button onClick={onClickMore} class="btn btn-primary">עוד</button>
      </div>


    </div>
  )
}
{/* <div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}



{/* <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}