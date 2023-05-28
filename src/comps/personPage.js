import React, { useState } from 'react'
import SonPage from './sonPage';
import { AppContext } from '../contexts/myContext';


export default function PersonPage() {
     let [chooseFruits,setChooseFruits]=useState("")
     let [fruit_ar,setFruit_ar]=useState(["appel","banana","rimon"])

     const addNewFruit=(_fruit)=>{
        alert(_fruit)
        setFruit_ar([...fruit_ar,_fruit])
     }

  return (
    <div className='container'>
    <AppContext.Provider value={{setChooseFruits,addNewFruit,chooseFruits}}>
    
    i am  PersonPage and i container 
      <SonPage fruit_ar={fruit_ar}></SonPage>
      </AppContext.Provider>
    </div>
  )
}
