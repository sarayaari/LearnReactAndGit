import React from 'react'
import useCounter from '../hooks/useCounter'
import useName from '../hooks/useName';
import usePhone from '../hooks/usePhone';

export default function Counter() {
    let [mycounter, add1Number, reset] = useCounter(3);
    let [myname, addMyname, dellName] = useName("rut")
    let [phon,addtoPhon,dell]=usePhone(7179303);
    return (
        <div>
            <h2>counter:{mycounter}</h2>
            <button onClick={add1Number}>add 1</button>
            <button onClick={reset}>reset</button>
            <p>my name is :{myname}</p>
            <button onClick={addMyname}>add name</button>
            <button onClick={dellName} >dellName</button>
            
         <p>{phon}</p>
            <button onClick={addtoPhon}>add phone</button>
            <button onClick={dell}>dell phone</button>
        </div>
    )
}
