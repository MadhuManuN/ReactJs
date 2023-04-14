import React, { useEffect, useState } from 'react'

function CounterCalc() {
    let[count,setcount]=useState(0);
    let[calculation,setCalculation]=useState(0);
    useEffect(()=>{
        setCalculation(()=>count*2)
    },[count])
  return (
    <div>
        <h1>
            Increment:{count}
        </h1>
        <button onClick={()=>{setcount((c)=>c+1)}}>Add</button>
        <h2>Calculation: {calculation}</h2>
    </div>
  )
}

export default CounterCalc