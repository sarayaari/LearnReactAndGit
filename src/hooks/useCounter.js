import { useState } from "react";

export default function useCounter(_num) {
    let [counter, setcounter] = useState(_num);
    
    const addOne = () => {
        setcounter(counter + 1);
    }
    const reset = () => {
        setcounter(0);
    }
    return [counter, addOne,reset]
}