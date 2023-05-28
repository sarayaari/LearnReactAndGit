import { createSlice } from "@reduxjs/toolkit";
const initValue = {
    trips_arr: [
        {  id:1,name: "טיול ראשון",Difficulty:"1", kind:"מסלול רטוב", places:[{name:"מירון",points:[3.33,2.5]},{name:"בני ברק",points:[3.33,2.5]},{name:"תלאביב",points:[3.33,2.5]}] }, 
        {  id:2,name: "טיול שיני",Difficulty:"3", kind:"מסלול יבש", places:[{name:"ג",points:[3.33,2.5]},{name:"ב",points:[3.33,2.5]},{name:"א",points:[3.33,2.5]}] }, 
    ],
    selectTrip:{}
}
const TripsSlice = createSlice({
    name: "trips",
    initialState: initValue,
    reducers: {
        addTrip: (state,action)=>{
            state.trips_arr.push(action.payload.newTrips)          
        },
        selectTrip:(state,action)=>{
            state.selectTrip= state.trips_arr.find(trip=>trip.id===action.payload.trip_id)
        }
    }
})
 export const {addTrip,selectTrip}= TripsSlice.actions
export default TripsSlice.reducer