import React, { useEffect, useState } from 'react'

function Timer() {
    let[count,setcount]=useState(0);

    useEffect(()=>{
        console.log("rendered")
       let timer= setTimeout(() => {
            setcount(c=>c+1);
        }, 2000);
        return ()=>clearInterval(timer)//clean up code
    },[])
  return (
    <div>
        <h1>The Component Rendered {count} Times!</h1>
    </div>
  )
}

export default Timer