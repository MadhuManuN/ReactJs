import React, { useState } from 'react'
import TodoListDisp from './TodoListDisp';

function IncrementTodoList() {
    let [count,setCount]=useState(0);
    let[todos,setTodods]=useState(["Todo Task:"]);

    let increment=()=>{
        setCount(c=>c+1)
      
    }
  return (
    <div>
        <TodoListDisp todos={todos} list={count}/>
        <hr />
        <div>
            Count:{count}
            <button onClick={increment}>Increment</button>
        </div>
    </div>
  )
}

export default IncrementTodoList