import React from 'react'
import { toast } from 'react-toastify'
export default function AppTous() {
    const onclickbtn = () => {
        toast.error(":( sory so sory")
        toast.success("ysee",{
            position: "top-left",
        }
    
        )
    }
    return (
        <div className=' container mt-3 d-block '>
      <h2>Popup</h2>  
      {/* <br></br> */}
            <button onClick={onclickbtn}> click me </button>
        </div>
    )
}
