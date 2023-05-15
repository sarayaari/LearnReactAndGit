import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./comps/home.js";
import Abaut from "./comps/abaut.js";
import Layout from "./comps/layout.js";
import Galery from "./comps/galery.js";

export default function AppRouter(props) {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='/abaut' element={<Abaut />} />
                    <Route path='/galery' element={<Galery />} />
                </Route>
            </Routes>
        </Router>
    )
}

 
