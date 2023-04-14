import React from 'react'

function ConditionalsTernary_Logical({dept}) {
  return (                                                  //Logical Operator
    <>
    <h1>Department</h1>
    {
      dept.length >0 && 
      <h2>
        There are {dept.length} Department in a Company
      </h2>
    }
    </>
  )
}

export default ConditionalsTernary_Logical