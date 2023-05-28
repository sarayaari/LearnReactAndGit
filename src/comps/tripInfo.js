import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


export default function TripInfo() {

    const trip=useSelector(state=>state.selectTrip)
  
//  let [id] = useParams();
  

    useEffect(() => {
        // console.log(id)
       
        //  console.log(item)
    }, [])

    return (
        <div>
            hi
      
        </div>
    )
}



      {/* {propItem.places[0] ? 
      propItem.places.map((item,index)=>{
        return(
          <p key={index}>{item.name}</p>
        )
      })
      :<p>not somsing</p>
      } */}