import './App.css';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import AppTrips from './comps/appTrips';
import tripsSlice from "./featurs/TripsSlice"


const mystore = configureStore({
  reducer: {
    tripsSlice
  }
})


function App() {
  return (
    <Provider store={mystore} >
      <AppTrips></AppTrips>
    </Provider>
  );
}

export default App;
