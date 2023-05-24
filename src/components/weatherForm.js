import React, { useRef } from 'react'
 import { useNavigate } from 'react-router'

function WeatherForm() {
  let inputRef=useRef();
   let nav= useNavigate();
   const searchweatherCity=()=>{
    nav("/?q="+ inputRef.current.value)
   }
  return (
    <nav className='container-fluid bg-warning p-2'>
      <div className='container'>
        <div className='row'>
          <div className='logo col-outo text-light'>
            <h2>weather sites</h2>
            <div className='d-flex col-md-4'>
              <input ref={inputRef} onKeyDown={(e)=>{if(e.key=="Enter") searchweatherCity()}}  id="id_input" type='search' className='form-control' placeholder="switch weather country to see ? " />
              <button onClick={searchweatherCity} id="id_btn"  className='btn-btn-dark'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default WeatherForm
