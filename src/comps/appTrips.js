import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './footer'
import Header from './header'
import TripsList from './tripsList'
import Trip from './trip';
import AddTrip from './addTrip';
import TripInfo from './tripInfo';
import TripSelectionGraph from './tripSelectionGraph';
import { useDispatch, useSelector } from 'react-redux';
import { setTrips } from '../featurs/TripsSlice';



export default function AppTrips() {
   let dispatch= useDispatch();
 
  const trips_arr = useSelector((mystore) => mystore.tripsSlice.trips_arr)
  const selectTrip = useSelector((mystore) => mystore.tripsSlice.selectTrip)


  useEffect(() => {
     console.log("hi")
     let tripsAr= localStorage.getItem("trips_ar")
     if (tripsAr!=null) {
      dispatch(setTrips({newTrips:JSON.parse(tripsAr)}))
    } 
    //else try {
    //   const tripState = JSON.stringify(trips_arr);
    //   localStorage.setItem('trips_ar', tripState);

    //   const select_trip = JSON.stringify(selectTrip);
    //   localStorage.setItem('select_trip', select_trip);

    // } catch (error) {
    //   console.log(error);
    // }
  },[trips_arr,selectTrip])


  return (
    <BrowserRouter  >
      <Header></Header>
      <Routes >
        <Route index element={<TripsList />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/addTrip" element={<AddTrip />} />
        <Route path="/tripInfo/:id" element={<TripInfo />} />
        <Route path="/choicesTrip" element={<TripSelectionGraph />} />
        <Route path="/*" element={<h1>file not foun :(</h1>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}
