// import React from 'react'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectTrip, addLike } from "../featurs/TripsSlice"
import LikeDislike from "../shared/comps/likeDislike";

const TRACK_TYPE = " סוג מסלול ";
const DIFFICULTY = "דרגת קושי"

export default function Trip(props) {

  const dispatch = useDispatch();

  const nav = useNavigate();
  const propItem = props.item;

  const onClickMore = () => {
    console.log(propItem.id)
    dispatch(selectTrip({ trip_id: propItem.id }))
    nav(`/tripInfo/${propItem.id}`);
  }
  const onClickLike = () => {
    dispatch(addLike({ trip_id: propItem.id }))
  }

  return (
    <div style={{ textAlign: "right" }} className='card col-3  my-3 mx-2  '>
      <div className="float-right card-header  ">
        <p style={{ fontSize: "0.8em" }} className='d-block'>{propItem.name}</p>
      </div>
      <div className='float-right card-body'>

        <div className="row justify-content-between align-items-center " >
          <div onClick={onClickLike} className='col-4   textAlign-center m-2' >
            <div className="col-2 justify-content-center"><LikeDislike id={propItem.id}  ></LikeDislike></div>
          </div>

          <p class="textAlign:rigth col-7 card-title" style={{ fontSize: "0.8em" }}>{TRACK_TYPE}:{propItem.kind}</p>
        </div>
       
        <p class="card-text">{DIFFICULTY}:{propItem.Difficulty}</p>
        <button style={{ fontSize: "0.8em" }} onClick={onClickMore} class="btn btn-primary  text-end ">עוד</button>
      </div>
    </div>
  )
}





     {/* <div className="card-img-top">
     <img  src="../../public/logo192.png" className="card-img-top" alt="vfvfv" />  
     </div> */}
