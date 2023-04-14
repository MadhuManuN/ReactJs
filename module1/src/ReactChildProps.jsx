import React from 'react'

function ReactChildProps({cname,location,info}) {
  return (
    <div>
        <h3>This is Child Company accepts Data from parent Company {cname} Located in {location}</h3>
        <h3>Employee Detilas in the company {cname}</h3>
        <h4>Employee Name: {info.name}</h4>
        <h4>Employee Department: {info.department}</h4>
    </div>
  )
}

export default ReactChildProps