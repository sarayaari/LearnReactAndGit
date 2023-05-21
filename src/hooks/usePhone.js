import { useState } from "react"


export default function usePhone(_phone) {
    const [phone, setPhone] = useState(_phone);
    const addPhone=()=>{
        setPhone("052"+phone)
    }
     const del=()=>{
        setPhone(phone.slice(2,phone.length-1))
     }
  return [phone,addPhone,del]
}
