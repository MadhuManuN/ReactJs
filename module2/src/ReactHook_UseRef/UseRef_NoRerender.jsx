import React, { useEffect, useRef, useState } from 'react'

function UseRef_NoRerender() {
    let[inputValue,setInputValue]=useState("")
    let count=useRef(0);

    useEffect(()=>{
        count.current=count.current+1;
    })
  return (
    <div>
        <label htmlFor="">Enter SomeThing: </label>
        <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
        <h1>Render Count : {count.current}</h1>
    </div>
  )
}

export default UseRef_NoRerender