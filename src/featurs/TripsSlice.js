import { createSlice } from "@reduxjs/toolkit";
import { TripModel } from "../shared/types.ts"

const initValue = {
    trips_arr: [
        { id: 1, name: "טיול ראשון", Difficulty: "1", kind: "מסלול רטוב", like: 0, places: [{ name: "מירון", points: [3.33, 2.5] }, { name: "בני ברק", points: [3.33, 2.5] }, { name: "תלאביב", points: [3.33, 2.5] }] },
        { id: 2, name: "טיול שיני", Difficulty: "3", kind: "מסלול יבש", like: 0, places: [{ name: "ג", points: [3.33, 2.5] }, { name: "ב", points: [3.33, 2.5] }, { name: "א", points: [3.33, 2.5] }] },
        { id: 3, name: "רמת הגודלן", Difficulty: "1", kind: " מסלול קל ", like: 0, places: [{ name: "רחיבת סוסים", points: [33.1303447977547, 35.77975548425604] }, { name: "פארק וולקני הר אביטל", points: [33.10786926046949, 35.80203411745037] }, { name: "עין נוב - אבני איתן", points: [32.83419954780327, 35.76754861931378] }], Description: " מסלול לרמת הגולן קל יחסית ומתאים לכל גיל " },
    ],
    selectTrip: { id: 3, name: "רמת הגודלן", Difficulty: "1", kind: " מסלול קל ", places: [{ name: "רחיבת סוסים", points: [33.1303447977547, 35.77975548425604] }, { name: "פארק וולקני הר אביטל", points: [33.10786926046949, 35.80203411745037] }, { name: "עין נוב - אבני איתן", points: [32.83419954780327, 35.76754861931378] }], Description: " מסלול לרמת הגולן קל יחסית ומתאים לכל גיל " },

}
const smallObjTrip = (t) => {
    let obj = {
        name: t.name,
        like: t.like,
        id: t.id
    }
    return obj
}

const TripsSlice = createSlice({
    name: "trips",
    initialState: initValue,
    reducers: {
        addTrip: (state, action) => {
            state.trips_arr.push(action.payload.newTrips)
        },
        selectTrip: (state, action) => {
            state.selectTrip = state.trips_arr.find(trip => trip.id === action.payload.trip_id)
        },
        addLike: (state, action) => {
            debugger;
            const tmpTrip = state.trips_arr.find(trip => trip.id === action.payload.trip_id)
            tmpTrip.like += 1;
        },
        getChoicesTrip: (state, action) => {
           const tripSmall_ar=state.trips_arr.map((item)=>{return smallObjTrip (item)})
            debugger
           return tripSmall_ar;
        }


    }
})
export const { addTrip, selectTrip, addLike ,getChoicesTrip } = TripsSlice.actions
export default TripsSlice.reducer