import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getChoicesTrip } from '../featurs/TripsSlice';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default function TripSelectionGraph() {
    const tripsList = useSelector((mystore) => mystore.tripsSlice.trips_arr)
    let likeAr = tripsList.map((item) => {
        return { id: item.id, name: item.name, munLike: item.like }
    })
    console.log(likeAr)
    const dispath = useDispatch()
   
    const nav = useNavigate()
    
    const onClickBack = () => {
        nav("/")
    }

    useEffect(() => {
        debugger;
        console.log("likeAr")
         console.log(likeAr)
        let st_ar = dispath(getChoicesTrip)     
    }, [])


 const indexLabel=(e)=>{
    let max=Math.max(...likeAr)
    let  min=0
     if (e===max)
      return "\u2605 Highest"
       if (e===min)
        return  "\u2691 Lowest"
        return null
 }

    const options2 = {
         animationEnabled: true,
         exportEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2", light2
        title: {
            text: "הטיולים הנבחרים בקבוצה זו "
        },
        axisY: {
            title: "מספר הבוחרים ",
       
        },
        axisX: {
            title: " סוגי הטיולים",
            labelAngle: 0
        },
        indexLabelFontColor: "#5A5757",
      	indexLabelFontSize: 16,
		indexLabelPlacement: "outside",
        data: [{
            type: "column",
            dataPoints:likeAr.map((item,index)=>{
                 console.log(item)
                return{ label:item.name,y:item.munLike,indexLabel:indexLabel(item.munLike) }
            })         
        }]
    }


    return (
        <div className=' container col-8 mt-5'>
            <CanvasJSChart options={options2} />
            <button onClick={onClickBack}>חזרה לדף הבית </button>
        </div>
    )
}

