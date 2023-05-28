import React, { useContext } from 'react'
import { AppContext } from '../contexts/myContext'

export default function GrandsonPage(props) {

    let {setChooseFruits} = useContext(AppContext)
    const onClickFruit = () => {
      
        setChooseFruits(props.mane)
    }
    return (
        <div className=' d-inline '>
            <p onClick={onClickFruit} >{props.mane}</p>
            
        </div>
    )
}
