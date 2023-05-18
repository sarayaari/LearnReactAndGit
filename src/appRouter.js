import React from 'react'
import { BrowserRouter as Router, Routes, Route ,Link, BrowserRouter} from "react-router-dom";

import Home from "./comps/home.js";
import Abaut from "./comps/abaut.js";
import Layout from "./comps/layout.js";
import Galery from "./comps/galery.js";
import Vip from './comps/vip.js';

export default function AppRouter(props) {
    return (
        <BrowserRouter>
            <header className='container p2'>
    {/* <h3>  🥪🥗🥪  hellp headerc🥪🥗🥪</h3>   */}
    <Link to="/ " className='me-2' >home</Link>
    <Link to="./galery" className='me-2' >Galery</Link>
    <Link to="./abaut" className='me-2' >ABOUT</Link>
      </header>
        {/* <Router> */}
            <Routes>
                {/* <Route path='/' element={<Layout />} > */}
                    <Route index element={<Home />} />
                    <Route path='/abaut' element={<Abaut />} />
                    <Route path='/galery' element={<Galery />} />
                    <Route path='/vip/:id' element={<Vip />} />
                    <Route path='/*' element={<h3>page not found ,404</h3>} />
                {/* </Route> */}
            </Routes>
        {/* </Router> */}
        <footer className='container p-4'>
        <h3>🦶🦶🦶footer🦶🦶🦶</h3>
      </footer>
        </BrowserRouter>
    )
}

 
