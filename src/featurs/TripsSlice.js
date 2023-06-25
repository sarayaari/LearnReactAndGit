import { createSlice } from "@reduxjs/toolkit";
 import UseLclStrg from "../customHooks/useLclStrg";

 const init=()=>{
    const initValue = {
        trips_arr: [
            { id: 1,
             name: " מסלולי הליכה", 
             Difficulty: "1",
              kind: "מסלול רטוב",
               like: 5,
               mapId:[32.79600827405755, 34.985362867882145],
            places: [{ name: "מחוות משמר הכרמל אל עין אלון שבכרמל",points: [32.725781387064174, 35.01349213253195] , 
                img:"https://familytrips.co.il/wp-content/uploads/elementor/thumbs/20210423_105200-p658tym159gvogjaqbw7f479bzluoofmh9ip55rna8.jpg"},
                 { name: "חווית הרוכבים",points: [32.73314418265105, 35.013261595218324] ,
                  img:"https://lh5.googleusercontent.com/p/AF1QipO2n9L7V4Ayeu1QDvQTvznXClcVLyl3ZftopXmV=w408-h272-k-no"},
                   { name: "גן לאומי תל דור ", points: [32.620288468048514, 34.918077104335026],img:"https://www.parks.org.il/wp-content/themes/joomi/inc/imgp.php?src=https://static.parks.org.il/wp-content/uploads/2022/04/%D7%AA%D7%9C-%D7%93%D7%95%D7%A8-%D7%A6%D7%99%D7%9C%D7%9D-%D7%90%D7%99%D7%9C-%D7%A9%D7%A4%D7%99%D7%A8%D7%90.jpg&width=604&height=417&co=8&q=60" }],
                   Description:" מסלול מדהים למיטיבי לכת " },
           
            { id: 2, name: " עתיקות ואנדרטות", Difficulty: "3", kind: "מסלול יבש",mapId:[32.79600827405755, 34.985362867882145] ,like: 56, places: [{ name: "ממצפה הילה לעין טמיר ולמבצר מונפור", points: [33.03675936181058, 35.24458036431138], img :"" }, { name: "שמורת טבע נחל קדש", points: [33.136278459155115, 35.562459255855345] , img:""}, { name: "ביקור בשרידי בית כנסת עתיק מתקופת התלמוד", points: [33.044253448465845, 35.4144185988305], img:"" }],Description:" משולב מסלול רטוב עם עתיקות ומצפה מרהיבב" },
            { id: 3, name: "מערות", Difficulty: "1", kind: " מסלול קל ", like: 8,mapId:[32.08558786111823, 34.83547000752875], places: [{ name: "גן לאומי בית גוברין", points: [31.601813731673666, 34.89547473253707], img:"" }, { name: "שמורת טבע מערת הנטיפים", points: [31.75595381485685, 35.02427864787284], img:"" }], Description: " מסלול לרמת הגולן קל יחסית ומתאים לכל גיל " },      
        ],
        selectTrip: { id: 3, name: "רמת הגודלן", Difficulty: "1", kind: " מסלול קל ", places: [{ name: "רחיבת סוסים", points: [33.1303447977547, 35.77975548425604] }, { name: "פארק וולקני הר אביטל", points: [33.10786926046949, 35.80203411745037] }, { name: "עין נוב - אבני איתן", points: [32.83419954780327, 35.76754861931378], img:"" }], Description: " מסלול לרמת הגולן קל יחסית ומתאים לכל גיל " },
    }
    return initValue
 }


const smallObjTrip = (t) => {
    let obj = {
        name: t.name,
        like: t.like,
        id: t.id
    }
    return obj
}

 const saveLoclStrg =(name,value)=>{
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(name,jsonValue)
 }


const TripsSlice = createSlice({
    name: "trips",
     //initialState: UseLclStrg('trip_ar',initValue) ,
   // initialState: state ,
   initialState:init(),
    reducers: {
        setTrips:(state, action)=>{
            // state.trips_arr(action.payload.newTrips)
        },
        addTrip: (state, action) => {
            state.trips_arr.push(action.payload.newTrips)
            saveLoclStrg("trips_ar",state.trips_arr)            
        },
        selectTrip: (state, action) => {
            state.selectTrip = state.trips_arr.find(trip => trip.id === action.payload.trip_id)
            saveLoclStrg("select_trip",state.selectTrip)
        },
        addLike: (state, action) => {
            debugger;
            const tmpTrip = state.trips_arr.find(trip => trip.id === action.payload.trip_id)
            tmpTrip.like += 1;
            saveLoclStrg("trips_ar",state.trips_arr) 
        },
        getChoicesTrip: (state, action) => {
           const tripSmall_ar=state.trips_arr.map((item)=>{return smallObjTrip (item)})
            debugger
           return tripSmall_ar;
        }
    }
})
export const { addTrip, selectTrip, addLike ,getChoicesTrip,setTrips} = TripsSlice.actions
export default TripsSlice.reducer