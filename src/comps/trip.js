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
    <div className='card   direction-rtl text-right  '>
      <div className="">
        <h5 className='card-header'>{propItem.name}</h5>
        <div className='card-body'>
        <div onClick={onClickLike} className='float-start' >
            <LikeDislike></LikeDislike>
            <p>{propItem.like}</p>
          </div>
          <br/>
          <br/>
          <br/>
          <h5 class="card-title"> {TRACK_TYPE}:{propItem.kind}</h5>
          <p class="card-text">{DIFFICULTY}:{propItem.Difficulty}</p>
          <button onClick={onClickMore} class="btn btn-primary">עוד</button>
        </div>
      </div>


    </div>
  )
}

