import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(request) {
  let [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        loadUsers();
    }
      , 1000);
  }, []);
  const loadUsers=async ()=>{
    const result= await axios.get(request);
    console.log(result.data.data)
    setData(result.data.data);
  }
  return { data };
}

export default useFetch;