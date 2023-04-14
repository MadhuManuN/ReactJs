import React from 'react'
import Child_D from './Child_D'

function Child_C(props) {
  return (
    <div>
        <Child_D eName={props.eName}/>
    </div>
  )
}

export default Child_C