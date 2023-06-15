import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getChoicesTrip } from '../featurs/TripsSlice';

import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function TripSelectionGraph() {
    const tripsList = useSelector((mystore) => mystore.tripsSlice.trips_arr)
    let likeAr = tripsList.map((item) => {
        return { id: item.id, name: item.name, munLike: item.like }
    })
    console.log(likeAr)
    const dispath = useDispatch()

    const nav = useNavigate()
    let [suffixes, setSuffixes] = useState();
    let [order, setOrder] = useState();
    const onClickBack = () => {
        nav("/")
    }

    useEffect(() => {
        debugger
        let st_ar = dispath(getChoicesTrip)
    }, [])

    //   const options = {
    //     title: {
    //       text: "Basic Column Chart in React"
    //     },
    //     data: [{
    //       type: "column",
    //       dataPoints: [
    //         { label: "Apple",  y: 10  },
    //         { label: "Orange", y: 15  },
    //         { label: "Banana", y: 25  },
    //         { label: "Mango",  y: 30  },
    //         { label: "Grape",  y: 28  }
    //       ]
    //     }]
    // }

    const addSymbols = (e) => {
        setSuffixes(["", "K", "M", "B"]);
        setOrder(Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1)), 0));
        if (order > suffixes.length - 1)
            order = suffixes.length - 1;

        let suffix = suffixes[order];
        return (e.value / Math.pow(1, order)) + suffix;
    }


    const options2 = {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "הטיולים הנבחרים בקבוצה זו "
        },
        axisY: {
            title: "מספר הבוחרים ",
            //  labelFormatter: addSymbols,
            scaleBreaks: {
                autoCalculate: true
            }
        },
        axisX: {
            title: " סוגי הטיולים",
            labelAngle: 0
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "טיול 1", y: 1 },
                { label: "טיול 2", y: 3 },
                { label: "טיול 3", y: 40 },
                // { label: "UC Browser", y: 17453224},
                // { label: "MX Player", y: 6389443},
                // { label: "Hotstar", y: 4815084},
                // { label: "Truecaller", y: 7631644}	
            ]
        }]
    }


    return (

        <div className=' container col-8 mt-5'>
            <CanvasJSChart options={options2} />
            <button onClick={onClickBack}>חזרה לדף הבית </button>
        </div>

    )
}

