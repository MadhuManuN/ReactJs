import React, { useState } from "react";

function ReactForms() {
  let [inputs, setInputs] = useState({ username: "", age: "" ,place:""});
  let [printData, setPrintData] = useState({});
  let [myplace,setMyPlace]=useState("");
  // let handleChange=(event)=>{
  //     let name=event.target.name;
  //     let value=event.target.value;
  //     setInputs(values=>({...values,[name]:value}))
  // }
  let handleChange = ({ target: { name, value } }) => {
    setInputs({ ...inputs, [name]: value });
  };
  let handleSubmit = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    event.preventDefault();
    setPrintData({ ...inputs });
    setInputs({ username: "", age: "",place:"" });
    setMyPlace(event.target.value)
  };
  return (
    <div>
      <table border={"2px"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{printData.username}</td>
            <td>{printData.age}</td>
            <td>{printData.place}</td>
          </tr>
        </tbody>
      </table>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Enter The Name:
          <input
            type="text"
            placeholder="Enter The Name"
            name="username"
            value={inputs.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Enter Your Age:
          <input
            type="text"
            placeholder="Enter Age"
            name="age"
            value={inputs.age}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">Select Your Place
        <select value={inputs.place} onChange={handleChange} name="place">
        <option value=""></option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Mysuru">Mysuru</option>
          <option value="Delhi">Delhi</option>
        </select>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactForms;
