import React,{useState } from 'react'

function TestJsx() {

    let [show, setShow] = useState(false);
    const butn = <button>i tmo button </button>;
    const arr={name:"sari"}
    const button5 = (_txt) => {
        return (
            <button> muy name is :{_txt}</button>
        )
    }
    return (
        <div className='container'>
            <h2>textJsx</h2>
            <p>
                vbvbbvbvbv bvbvbv bvbvb vbvbvbvbvbbv
            </p>
            <h3> add  h3 to jsx</h3>
            <h3> add second h3 to jsx</h3>
            { show && butn }
            {show?<button>i btn ?</button>:null}
            {button5("sari")} 
        {arr.lastName||"lastname is undefin"}

        </div>
       
    )
}

export default TestJsx

