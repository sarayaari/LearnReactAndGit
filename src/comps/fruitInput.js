import React, { useContext } from 'react'
import { AppContext } from '../contexts/myContext'
import { useRef } from 'react'

export default function FruitInput() {
     let {addNewFruit}=useContext(AppContext)
     let {chooseFruits}=useContext(AppContext)
      let inputRef=useRef();


  return (
    <div>
    <h1>the fruit is choose is :{chooseFruits}</h1>
      <input ref={inputRef} type='text' placeholder='enter fruit'></input>
      <button onClick={()=>{addNewFruit(inputRef.current.value)}} className='btn btn-success'>add </button>
    </div>
  )
}
