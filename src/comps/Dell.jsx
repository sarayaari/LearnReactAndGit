import { faL } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
 import UseCounter from '../customHooks/useCounter'
import UseLclStrg from '../customHooks/useLclStrg';
import UseData from '../customHooks/UseData';

export default function Dell() {
     const N=19;
    const [counter,counter2]=UseCounter(8);
    const [appData]=UseData();
// const [state, setState]=UseLclStrg('trips_ar',appData)
    // const [state, setState]=useState()
    // console.log("from my hook")
    // console.log(state)

    useEffect(() => {       
        console.log("agge")
        console.log( stepByStep(600,5))
        console.log("endagge") 
    }, [])

    const fizzBuzz = () => {
        let tmp = ""
        for (let i = 0; i < 100; i++) {
            if (i % 3 === 0)
                if (i % 5 === 0) {
                    tmp += " " + "FizzBuzz";
                }
                else {
                    tmp += " " + "Fizz";
                }
            else if (i % 5 === 0) {
                tmp += " " + "Buzz";
            }
            else tmp += " " + i;
        }
        return tmp;
    }
    const subPilandrom = (str, start, end) => {// שולחים א תכל המערך  נקודת אמצע התחלה וסוף
        if (start == end) {
            return true;
        }
        if (end - start < 2) {//מחרוזת בת 2-3 תווים
            if (str[start] == str[end]) {
                return true
            }
            else
                return false
        } else if (str[start] == str[end] && subPilandrom(str, start + 1, end - 1))// המחרוזת גדולה מ3 תווים 
            return true
        else return false
    }
    const pilandrom = (str) => {
        let indEnd = str.length - 1;
        let indStrt = 0;
        if (subPilandrom(str, indStrt, indEnd))
            return true
        else return false
    }
    const subFibunatchi = (n) => {
        if (n == 2)
            return 1
        else if (n == 1)
            return 1
        else if (n < 1)
            return 0;
        else return (subFibunatchi(n - 1) + subFibunatchi(n - 2))

    }
    const fibunatzi = (n) => {
        return subFibunatchi(n - 1) + subFibunatchi(n - 2)
    }
    const throwing = (n) => {
        if (n<=19){
            return true
        }    
        return false
    }
      
     const FloorsEggs =(n,k)=>{
         debugger ;
          
       let tempBreac= breackAge(n,k)
        while(tempBreac<19){
            tempBreac+=1;
        }
        return tempBreac -1
     }

const stepByStep=(n,k)=>{
     debugger
     if (k<=0)//  אין ביצים 
     {
        return undefined;
     }
     if (n===1 )//קומה 1 ,
     {
        return 1
     }
      if (k==1 && n >1) {
        return n ;
      }
  return k+stepByStep(Math.round(n/k),k-1) 
}
    const breackAge = (n, k) => {
         debugger    
        let step =  Math.round(Math.sqrt(n)) //  מצא שורש שלם 
        let indStep = step;
        while (throwing(indStep))
             {
                indStep += step
            }
            return indStep -step
    }


  



    return (
        <div>
        ;
{/* <UseCounter></UseCounter> */}
        </div>
    )
}



//פתרון מרובי
// function eggDrop(n, k) {
//     // Create a 2D array to store the minimum number of  needed for each floor and egg combination
//     const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(0));
    
//     // Base case: if there is only one egg, we need to drop it from each floor one by one
//     for (let i = 1; i <= n; i++) {
//       dp[i][1] = i;
//     }
    
//     // Base case: if there is only one floor, we only need to drop the egg once
//     for (let j = 1; j <= k; j++) {
//       dp[1][j] = 1;
//     }
    
//     // Fill in the rest of the array using dynamic programming
//     for (let i = 2; i <= n; i++) {
//       for (let j = 2; j <= k; j++) {
//         dp[i][j] = Infinity;
//         for (let x = 1; x <= i; x++) {
//           // If the egg breaks when dropped from floor x, we need to search for the solution in the lower floors with one less egg
//           const breaks = dp[x - 1][j - 1];
//           // If the egg does not break when dropped from floor x, we need to search for the solution in the upper floors with the same number of eggs
//           const doesNotBreak = dp[i - x][j];
//           // Take the maximum of the two cases plus one (for the current toss)
//           const worstCase = Math.max(breaks, doesNotBreak) + 1;
//           // Update the minimum number of tosses needed for this floor and egg combination
//           dp[i][j] = Math.min(dp[i][j], worstCase);
//         }
//       }
//     }
    
//     // The minimum number of tosses needed to find the floor from which the egg breaks is the value in the last cell of the array
//     return dp[n][k];
//   }
  
//   // Example usage:
//   console.log(eggDrop(100, 2)); // Output: 14
//tosses