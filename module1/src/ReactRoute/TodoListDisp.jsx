import React, { memo } from 'react'

function TodoListDisp({todos,list}) {
    console.log("Todo Task Rendered")
  return (
    <div>
        <h2>My Todos</h2>
        {
            todos.map((todo,index)=>{
                return <h4 key={index}>{todo} {list}</h4>;
            })
        }
    </div>
  )
}

export default memo(TodoListDisp)