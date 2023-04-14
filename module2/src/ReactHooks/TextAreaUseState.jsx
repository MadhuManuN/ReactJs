import React, { useState } from 'react'

function TextAreaUseState() {
    let maxlength=40;
    let[textValue,setTextValue]=useState("");
    let updateTextValue=(e)=>{
        setTextValue(e.target.value)
    }
  return (
    <div>
        <h3>Entered Data Here: {textValue}</h3>
        <textarea name="" id="" cols="30" rows="10" maxLength={maxlength} onChange={updateTextValue} value={textValue}></textarea>
        <h5>Remaining Characters: {maxlength-textValue.length}</h5>
    </div>
  )
}

export default TextAreaUseState