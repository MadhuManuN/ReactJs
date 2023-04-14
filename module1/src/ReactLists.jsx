import React from 'react'
import FruitsList from './FruitsList'

function ReactLists() {
    let fruits=[{id:1,name:"Apple"},{id:2,name:"Banana"},{id:3,name:"Grapes"},{id:4,name:"Orange"}]
  return (
    <div>
        <h1>Which Fruits do You Like</h1>
        <ul>
        {
            fruits.map((data)=>
                <FruitsList key={data.id} fname={data.name}/>
            ) 
        }
        </ul>
    </div>
  )
}

export default ReactLists