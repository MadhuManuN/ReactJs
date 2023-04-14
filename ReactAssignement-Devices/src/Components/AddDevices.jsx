import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./AddDevice.css";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import NavBar from "./NavBar";
import company from "./zkteco.jpg";
import "./NavBar.css";

function AddDevices() {
  let [add, setAdd] = useState(true);
  let reDirectPage = useHistory();
  const [addObj, setAddObj] = useState({
    id: "",
    name: "",
    type: "",
    description: "",
    price: "",
    photo: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  let id = useRef();
  let photo = useRef();
  let name = useRef();
  let desc = useRef();
  let price = useRef();
  let type = useRef();

  let [errId, setErrId] = useState("");
  let [errName, setErrName] = useState("");
  let [errDesc, setErrDesc] = useState("");
  let [errPhoto, setErrPhoto] = useState("");
  let [errType, setErrType] = useState("");
  let [errprice, setErrprice] = useState("");
  let [isValid, setIsValid] = useState(false);

  let handleClick = (e) => {
    e.preventDefault();
    let text = addObj.id.toString();
    let numberRegex = /^\d+$/;
    if (addObj.id === "") {
      setErrId("*Id cannot Be Null");
      setIsValid(false);
    } else if (!numberRegex.test(text)) {
      setErrId("*Id should contain Only Numbers");
    } else {
      setErrId("");
    }
    if (addObj.name === "") {
      setErrName("*Name cannot Be Null");
    } else {
      setErrName("");
    }
    if (addObj.description === "") {
      setErrDesc("*Description cannot Be Null");
    } else {
      setErrDesc("");
    }
    if (addObj.photo === "") {
      setErrPhoto("*Photo cannot Be Null");
    } else {
      setErrPhoto("");
    }
    if (addObj.type === "") {
      setErrType("*Type cannot Be Null");
    } else {
      setErrType("");
    }
    let amount = addObj.id.toString();
    let numberRegex2 = /^\d+$/;
    if (addObj.price === "") {
      setErrprice("*Price cannot Be Null");
    } else if (!numberRegex2.test(amount)) {
      setErrprice("*Price should contain Only Numbers");
    } else {
      setErrprice("");
    }
    if (
      errId === "" &&
      errName === "" &&
      errDesc === "" &&
      errType === "" &&
      errprice === "" &&
      errPhoto === ""
    ) {
      setIsValid(true);
    }
    if (isValid) {
      fetch(" http://localhost:8081/device/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addObj),
      }).then((response) => {
        response.json().then((json) => {
          console.log(json);
          if (json.message === "Data Saved Successfully") {
            alert("Data Save Sucessfully");
            reDirectPage.push("/devices/zkteco");
          } else {
            setErrorMsg(json.message);
          }
        });
      });
    }
  };
  return (
    <div>
      <NavBar image1={company} yes={add} />
      <form onSubmit={handleClick}>
        <Grid container mx={61} my={10} spacing={2} width={900}>
          <Typography variant="h4" gutterBottom id="title">
            Add Device Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                ref={id}
                required
                helperText={errId}
                id="dId"
                name="dId"
                label="Device Id"
                fullWidth
                type="number"
                autoComplete="given-name"
                variant="filled"
                onChange={(e) => {
                  setAddObj({ ...addObj, id: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                ref={name}
                required
                helperText={errName}
                id="name"
                name="name"
                label="Device Name"
                fullWidth
                autoComplete="family-name"
                variant="filled"
                onChange={(e) => {
                  setAddObj({ ...addObj, name: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                ref={desc}
                helperText={errDesc}
                id="description"
                name="description"
                label="description"
                multiline
                rows={12}
                fullWidth
                autoComplete="device-description"
                variant="filled"
                onChange={(e) => {
                  setAddObj({ ...addObj, description: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                ref={photo}
                helperText={errPhoto}
                id="photo"
                name="photo"
                label="photo"
                multiline
                rows={12}
                fullWidth
                autoComplete="device-photo"
                variant="filled"
                onChange={(e) => {
                  setAddObj({ ...addObj, photo: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                ref={type}
                required
                helperText={errType}
                id="type"
                name="type"
                label="device type"
                fullWidth
                autoComplete="device-type"
                variant="filled"
                onChange={(e) => {
                  setAddObj({ ...addObj, type: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                ref={price}
                required
                helperText={errprice}
                id="price"
                name="price"
                label="device price"
                fullWidth
                type="number"
                autoComplete="device-price"
                variant="filled"
                onChange={(e) => {
                  setAddObj({ ...addObj, price: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
          </Grid>
          <Button variant="outlined" color="primary" type="submit" id="btn">
            ADD DEVICE
          </Button>
          <Link to="/devices/zkteco">
            <Button variant="outlined" color="primary" type="submit" id="btn">
              Cancel
            </Button>
          </Link>
        </Grid>
      </form>
      <Typography variant="h5" className="formError">
        {errorMsg}
      </Typography>
    </div>
  );
}

export default AddDevices;

{
  /* <h1>Add Device Details</h1>
      <hr />

      <form onSubmit={handleClick}>
        <label>Device Id:</label>      <input type="text"  ref={id}/>
        <label>Name:</label>           <input type="text"  ref={name}/>
        <label>Device Photo:</label>   <textarea  cols="30" rows="10"  ref={photo}></textarea>
        <label>Description:</label>    <textarea  cols="30" rows="10"  ref={desc}></textarea>
        <label>Price:</label>          <input type="number"  ref={price}/>
        <label>Device Type:</label>    <input type="text"  ref={type}/>
        <Button variant="contained" color="success">Success</Button>
       </form> */
}
//    <div className='formData'>
//   <h1>Add Device Details</h1>
//     <form name="myForm" onsubmit={handleClick}>
//     <div className="formDesign" id="dId">
//             <label for="dId">Device Id:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <input type="text" name="dId"  className="input"/><span className="formerror"></span>
//         </div>
//         <div className="formDesign" id="dName">
//             <label for="dName">Device Name:</label>
//             <input type="text" name="dName"  className="input"/><span className="formerror"></span>
//         </div>
//         <div className="formDesign" id="dDesc">
//             <label for="dDesc">Description:</label>&nbsp;&nbsp;&nbsp;
//             <textarea  cols="30" rows="10"  ref={desc} name='input' className="input"></textarea><b><span className="formerror"></span></b>
//         </div>
//         <div className="formDesign" id="dPhoto">
//             <label for="dPhoto">Photo :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <textarea  cols="30" rows="10"  ref={desc} name='dPhoto' className='input'></textarea><b><span className="formerror"></span></b>
//         </div>
//         <div className="formDesign" id="dPrice">
//             <label for="dPrice">Device Price:</label>
//             <input type="password" name="dPrice" className="input"/><b><span className="formerror"></span></b>
//         </div>
//         <div className="formDesign" id="dType">
//             <label for="dType">Device Type:</label>
//             <input type="text" name="dType" className="input"/><b><span className="formerror"></span></b>
//         </div>
//         <br/>
//         <input type="submit" value="Submit" name="btn" className="btn"/>
//     </form>
// </div>
