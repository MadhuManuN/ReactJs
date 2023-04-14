import React from 'react'

function ReactEvents() {
   let update=()=>{
        alert("Thank You! Employee Details Updated")
    }
    let addDetails=(a)=>{
        alert(a)
    }
    let clickBtn=(a,b)=>{
        alert(b.type)
    }
  return (
    <div style={{flex:"block"}}>
        <button onClick={update}>Update Employee Details!</button>
        <button onClick={()=>{addDetails("Employee Details added")}} style={{marginLeft:"10px"}}>Add Employee Details</button>
        <button onClick={(event)=>{clickBtn("Employee",event)}} style={{marginLeft:"10px"}}>Just Checking</button>
    </div>
  )
}

export default ReactEvents