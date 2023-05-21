import { useState } from "react";

export default function useName(_name){
    const [name, setName] =  useState(_name);
    const addName=()=>{
        setName("sarit");
    }
      const dellName=()=>{
        setName(null);
      }
     return [name,addName,dellName]
}