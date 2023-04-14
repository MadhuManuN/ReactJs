import React from 'react'
import Child_C from './Child_C'

function Child_B(props) {
  return (
    <div>
        <Child_C eName={props.eName}/>
    </div>
  )
}

export default Child_B