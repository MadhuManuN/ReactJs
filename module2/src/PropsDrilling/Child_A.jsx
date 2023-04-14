import React from 'react'
import Child_B from './Child_B'

function Child_A(props) {
  return (
    <div>
        <Child_B eName={props.eName}/>
    </div>
  )
}

export default Child_A