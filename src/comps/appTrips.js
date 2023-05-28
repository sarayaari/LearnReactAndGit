import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Footer from './footer'
import Header from './header'
import TripsList from './tripsList'
import Trip from './trip';
import AddTrip from './addTrip';
import TripInfo from './tripInfo';


export default function AppTrips() {
  return (
    <BrowserRouter  >
      <Header></Header>
      <Routes >
        <Route  index  element={<TripsList/>}/>
        <Route path="/trip" element={<Trip/>}/>
        <Route path="/addTrip" element={<AddTrip/>}/>
        <Route path="/tripInfo/:id" element={<TripInfo/>}/>
        <Route path="/*" element={<h1>file not foun :(</h1>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}
