import React, { useState } from 'react'

function UseStateHook() {
    let[car,setCar]=useState("RangeRover");
    let[carinfo,setCarInfo]=useState({
        brand:"RangeRover",
        model:"RR123",
        year:"1965",
        color:"Black"
    })
    let updateData=()=>{
        setCar("Benz");
        setCarInfo(previousState =>
            {return{...previousState ,brand:"Benz",model:"B123",year:"1968",color:"Blue"}
        })}
  return (
    <div>
        <h1 style={{color:"green"}}>My favorite Car is {car}</h1>
        <button type='button' onClick={updateData}>Benz</button>
        <button type='button' onClick={()=>{setCar("Audi");setCarInfo(previousState =>{return{...previousState ,brand:"Audi",model:"A7",year:"1970",color:"White"}})}}>Audi</button>
        <button type='button' onClick={()=>{setCar("BMW");setCarInfo(previousState =>{return{...previousState ,brand:"BMW",model:"BMw123",year:"1975",color:"Black"}})}}>BMW</button>
        <button type='button' onClick={()=>{setCar("Ferrari");setCarInfo(previousState =>{return{...previousState ,brand:"Ferrari",model:"fER123",year:"1980",color:"Red"}})}}>Ferrari</button>

        <h1>My {carinfo.brand}</h1>
      <p>
        It is a {carinfo.color} Colored {carinfo.model} model from {carinfo.year}.
      </p>
    </div>
  )
}

export default UseStateHook