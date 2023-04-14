import React, { useReducer } from 'react'

let initialTodo=[
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    }
]

const reducer=(state,action)=>{
    switch(action.type){
        case "Complete":
            return state.map((todo)=>{
                if(todo.id===action.id){
                    return {...todo,complete:!todo.complete}
                }
                else return todo;
            })
            default:
                return state;
    }
}
function UseReducerTodo() {

    const[todos,dispatch]=useReducer(reducer, initialTodo);

    let handleComplete=(todo)=>{
        dispatch({type:"Complete",id:todo.id})
    };
    
  return (
    <>
    <h1>hello</h1>
        {
           todos.map((todo) => (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)} 
                /> {todo.title}
                    </label>
                </div>
           ))
        }
    </>
  )
}

export default UseReducerTodo