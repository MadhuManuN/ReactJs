import React, { useReducer } from "react";

let initialValue = {
  firstValue: 0,
  secondValue: 10
};

let reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state, firstValue: state.firstValue + action.value };
    case "decrement":
      return {...state, firstValue: state.firstValue -  action.value };
      case "increment2":
      return {...state, secondValue: state.secondValue + action.value };
    case "decrement2":
      return {...state, secondValue: state.secondValue -  action.value };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};
function ReducerCounter_2() {
  let [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <h1>Counter 1 : {count.firstValue}</h1>
      <h1>Counter 2 : {count.secondValue}</h1>
      <button onClick={() => dispatch({type : "increment",value:1})}>Increment</button>
      <button onClick={() => dispatch({type : "decrement",value:1})}>Decrement</button>
      <button onClick={() => dispatch({type : "increment",value:5})}>Increment 5</button>
      <button onClick={() => dispatch({type : "decrement",value:5})}>Decrement 5</button>
      
      <div>
      <button onClick={() => dispatch({type : "increment2",value:1})}>Increment2</button>
      <button onClick={() => dispatch({type : "decrement2",value:1})}>Decrement2</button>
      </div>
      <button onClick={() => dispatch({type : "reset"})}>Reset</button>
    </div>
  );
}

export default ReducerCounter_2;
