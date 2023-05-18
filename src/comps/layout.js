import React from 'react'
 import {Outlet} from "react-router-dom"

function Layout() {
  return (
    <div>
    {/* <header className='container bd-dark p-8'>!Layout header!</header> */}
      <Outlet/>
    </div>
  )
}

export default Layout
