import axios from "axios";
import React, { useEffect, useReducer } from "react";

let initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      }
    case "FETCH FAILED":
      return {
        loading: false, 
        post: {},
        error: "sOMETHING WENT wRONG",
      }
      default   :
      return state
  }
};
function ReducerDataFetching() {
    let[state,dispatch]=useReducer(reducer, initialState )

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response=>{
            dispatch({type:'FETCH SUCCESS',payload:response.data})
        })
        .catch(error=>{
            dispatch({type:'FETCH FAILED'})
        })
    },[])
  return <div>
    {state.loading? 'loading':state.post.title}
    {state.error?state.error:null}
  </div>;
}

export default ReducerDataFetching;
