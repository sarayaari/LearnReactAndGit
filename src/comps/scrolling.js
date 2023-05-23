import React, { useEffect, useState } from 'react'

export default function Scrolling() {

    let [items_ar, setItems_ar] = useState([]);
    let [loading, setloading] = useState(false);
    let [isEnd, setIsEnd] = useState(true);
    let skipt = 0;


    useEffect(()=>{
        window.addEventListener("scroll", onscroll)
        return()=>{
            window.removeEventListener("scroll", onscroll);
           }
     },[])

    useEffect(() => {
        console.log("my arr:")
        console.log(items_ar)
    }, [items_ar])
  
    useEffect(() => {
         console.log("i isend")
        if (isEnd) {
            skipt += 10;
            doApi(skipt);
        }
    },[isEnd])


    const doApi = async (_skip) => {
        setloading(true);
        let url = `https://api.fda.gov/food/enforcement.json?limit=10&skip=${_skip}`
        let res = await fetch(url)
        let data = await res.json();
        console.log(data.results)
        setItems_ar((ar) => [...ar, ...data.results])
        setloading(false)
        setIsEnd(false)
    }
   

    const onscroll = () => {
        console.log("scroll work");
        // גובה החלון שהמשתמש רואה
        let windowHeight = window.innerHeight;
        // יחזיר את נקודת הוואי של הגלילה לפי החלק הכי עליון
        let scrollTop = document.documentElement.scrollTop;
        // גובה המסמך כולו
        let docHeight = document.documentElement.offsetHeight;
        console.log("scroll", windowHeight, scrollTop, docHeight);
        if (Math.ceil(windowHeight + scrollTop) >= docHeight) {
             console.log("end")
            setIsEnd(true)
        }


    }


    return (
        <div>
            <h2>list of :</h2>

            <h1 className='display-4'>List of recalls by the F.D.A</h1>
            <div>
                {items_ar.map((item) => (
                    <article key={item.event_id} className='col-md-7 border p-4 my-2'>
                        <h2>{item.recalling_firm}</h2>
                        <h4>Products type:{item.product_type}</h4>
                        <h4>Location:{item.state} {item.city}</h4>
                    </article>
                )
                )}

            </div>

            {loading && <h2>Loading ... </h2>}
        </div>
    )
}
const temp = [{ name: "s", padword: "123456", id: 1 }, { name: "b", padword: "52525", id: 2 }, { name: "r", padword: "9999", id: 3 }]
