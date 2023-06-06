import React, { useEffect } from 'react'

export default function Dell() {

    useEffect(() => {
        // console.log(fizzBuzz())
        //  console.log("aabanncnnabaa")
        // console.log(pilandrom("a"))
         console.log("31")
         console.log(fibunatzi(31))
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
        else return(subFibunatchi(n - 1) + subFibunatchi(n - 2))

    }
    const fibunatzi = (n) => {
        return subFibunatchi(n - 1) + subFibunatchi(n - 2)
    }
    return (
        <div>

        </div>
    )
}
