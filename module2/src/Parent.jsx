import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    let[count,setCount]=useState(0);
    let[task,setTask]=useState(0)
    let updateCount=()=>{
        setCount(c=>c+1)
       
    }
  return (
    <div>
        <Child task={task}/>
        <h1>count:{count}</h1>
        <button onClick={updateCount}>Increment</button>
        
    </div>
  )
}

export default Parent