import React from 'react'
 import {Outlet} from "react-router-dom"

function Layout() {
  return (
    <div>
    <header>Layout header</header>
      <Outlet/>
    </div>
  )
}

export default Layout
