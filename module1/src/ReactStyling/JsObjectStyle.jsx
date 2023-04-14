import React from 'react'

function JsObjectStyle() {
    const myStyle1={
        color:"Blue",
        backgroundColor:"lightgray",
        marginTop:"20px",
        fontFamily: "Sans-Serif"
    }
    const myStyle2={
        color:"Green",
        
        marginTop:"5px",
        fontFamily: "Sans-Serif"
    }
  return (
    <div>
        <h2 style={myStyle1}>
            Java Script Object Styling
        </h2>
        <h3 style={myStyle2}>
            Hello Madhu! Let's Do Styling
        </h3>
    </div>
  )
}

export default JsObjectStyle