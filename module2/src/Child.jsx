import React, { memo } from 'react'

function Child({task}) {
    console.log("child render")
  return (
    <div>
        <h1>{task} Tasks done</h1>
    </div>
  )
}

export default memo(Child)
