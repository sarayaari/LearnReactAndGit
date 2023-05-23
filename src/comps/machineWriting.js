import React from 'react'
import Typewriter from 'typewriter-effect';

export default function MachineWriting() {
let s =`
function myFunction() {
  console.log('Hello, world!');
}
`;

return (
    <div className='container'>
        <pre style={{ whiteSpace: "pre" }}>
            <Typewriter
                options={{
                    strings: [s],
                    autoStart: true,
                    loop: true,
                    delay: 2,
                }}
            />
        </pre>
    </div>
)
}

// let s =`
// function myFunction() {
//   console.log('Hello, world!');
// }
// `;

// return (
//     <div className='container'>
//         <pre style={{ whiteSpace: "pre" }}>
//             <Typewriter
//                 options={{
//                     strings: [s],
//                     autoStart: true,
//                     loop: true,
//                     delay: 2,
//                 }}
//             />
//         </pre>
//     </div>
// )
// }