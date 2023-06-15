import React, { useState } from 'react';

export default function UseCounter(initialValue) {

  const [count, setCount] = useState(initialValue);
  const [count2, setCount2] = useState(()=>{const l=null; return l??5});

return [count, count2]
}
