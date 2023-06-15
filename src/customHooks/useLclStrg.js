import React ,{ useState,useEffect } from 'react'

export default function UseLclStrg(key, initialState) {


  const loadState = (key) => {
    try {
      let strTrips_ar = localStorage.getItem(key)
      if (strTrips_ar)
        return undefined
      return JSON.parse(strTrips_ar)
    } catch (erro) {
      console.log(erro)
      return undefined
    }
  }

  const saveState = (state) => {
    try {
      let jsnstate = JSON.stringify(state)
      localStorage.setItem('trips_ar', jsnstate)
    } catch (error) {
      console.log(error)
    }
  }

  
  const [state, setState] = useState(() => {//אתחול לערך שמוחזר מפונקציית CALL BACK
    const localState = loadState(key)
    return localState ?? initialState
  })


  useEffect(() => {
    saveState(state)
  }, [key, state])




 return [state, setState]


  // return [["1212","12365477"]]
  
} 
//  UseLocalstorage;
