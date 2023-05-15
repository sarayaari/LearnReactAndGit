import React from 'react'

function WeatherForm() {
  return (

    <nav className='container-fluid bg-warning p-2'>
      <div className='container'>
        <div className='row'>
          <div className='logo col-outo text-light'>
            <h2>weather sites</h2>
            <div className='d-flex col-md-4'>
              <input  id="id_input" type='search' className='form-control' placeholder="switch weather country to see ? " />
              <button id="id_btn"  className='btn-btn-dark'>Search</button>
            </div>
          </div>
        </div>
      </div>
    </nav>



  )
}

export default WeatherForm
