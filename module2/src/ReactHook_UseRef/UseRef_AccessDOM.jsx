import React, { useRef, useState } from 'react'

function UseRef_AccessDOM() {
    let [name,setName]=useState("")
    let inputValue=useRef();
    let elementRef=useRef();
    let changeFocus=()=>{
        inputValue.current.focus();
        inputValue.current.value="Madhu";
        console.log(inputValue)
    }
    let updateColor=()=>{
        elementRef.current.style.color="red"
    }
    let getValue=()=>{
        setName((name)=>name=inputValue.current.value)
    }
  return (
    <div>
        <input type="text" ref={inputValue}/>
        <button onClick={changeFocus}>Focus and Update</button>
        <input type="button" onClick={getValue} value="Click to Get Values" />
        <h1 ref={elementRef}>Hello {name}! Welcome</h1>
      <input type="button" onClick={updateColor} value="Update Color" />
    </div>
  )
}

export default UseRef_AccessDOM