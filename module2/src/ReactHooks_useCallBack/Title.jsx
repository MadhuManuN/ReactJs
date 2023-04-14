import React from 'react'

function Title() {
    console.log("Rendering Tilte")
  return (
    <div>
        UseCallback Hook
    </div>
  )
}

export default React.memo(Title)