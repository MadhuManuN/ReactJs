import React from 'react'
import ReactChildProps from './ReactChildProps'

function ReactProps() {
    const empInfo = { name: "Madhu", department: "Java" };
  return (
    <div>
        <h1>This Is Parent Company to Pass props(info) to Employee child Component</h1>
        <ReactChildProps cname="ZKTECO" location="Bengaluru" info={empInfo}/>
    </div>
  )
}

export default ReactProps