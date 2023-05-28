import React from 'react'
import GrandsonPage from './grandsonPage'
import FruitInput from './fruitInput';

export default function SonPage(props) {
    let fruit_arr = props.fruit_ar;

    return (
        <div>
            <div className=' my-3 d-flex align-align-items-lg-stretch'>
                <FruitInput></FruitInput>
            </div>
            {fruit_arr && fruit_arr.map((item, index) => {
                return (
                    <GrandsonPage key={index} mane={item} />)
            })
            }
        </div>
    )
}
