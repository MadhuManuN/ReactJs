import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import "./AddDevice.css";
import NavBar from "./NavBar";
import company from "./zkteco.jpg";
import "./NavBar.css";

function UpdateDevice() {
  let [add, setAdd] = useState(true);
  let reDirectPage = useHistory();
  let { id1 } = useParams();
  const [addObj, setAddObj] = useState({
    id: "",
    name: "",
    type: "",
    description: "",
    price: "",
    photo: "",
  });

  let { data: device } = useFetch(`http://localhost:8081/device/${id1}`);
  // console.log('pppp',device);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (device != null) {
      setAddObj({
        ...addObj,
        id: device.id,
        name: device.name,
        type: device.type,
        description: device.description,
        price: device.price,
        photo: device.photo,
      });
    }
  }, [device]);
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
      fetch(`http://localhost:8081/device/${id1}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept-Type": "application/json",
        },
        body: JSON.stringify(addObj),
      }).then((response) => {
        response.json().then((json) => {
          console.log(json);
          if (json.message === "Device details Updated") {
            alert("Data Updated Sucessfully");
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
            Update Device Details
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                required
                helperText={errId}
                id="dId"
                name="dId"
                label="Device Id"
                fullWidth
                autoComplete="given-name"
                variant="filled"
                value={addObj.id}
                onChange={(e) => {
                  setAddObj({ ...addObj, id: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                helperText={errName}
                id="name"
                name="name"
                label="Device Name"
                fullWidth
                autoComplete="family-name"
                variant="filled"
                value={addObj.name}
                onChange={(e) => {
                  setAddObj({ ...addObj, name: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="description"
                name="description"
                label="description"
                helperText={errDesc}
                multiline
                rows={12}
                fullWidth
                autoComplete="device-description"
                variant="filled"
                value={addObj.description}
                onChange={(e) => {
                  setAddObj({ ...addObj, description: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="photo"
                name="photo"
                label="photo"
                multiline
                helperText={errPhoto}
                rows={12}
                fullWidth
                autoComplete="device-photo"
                variant="filled"
                value={addObj.photo}
                onChange={(e) => {
                  setAddObj({ ...addObj, photo: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                helperText={errType}
                id="type"
                name="type"
                label="device type"
                fullWidth
                autoComplete="device-type"
                variant="filled"
                value={addObj.type}
                onChange={(e) => {
                  setAddObj({ ...addObj, type: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                helperText={errprice}
                id="price"
                name="price"
                label="device price"
                fullWidth
                autoComplete="device-price"
                variant="filled"
                value={addObj.price}
                onChange={(e) => {
                  setAddObj({ ...addObj, price: e.target.value });
                  console.log(addObj);
                }}
              />
            </Grid>
          </Grid>
          <Stack>
            <Button variant="outlined" color="primary" type="submit" id="btn">
              UPDATE
            </Button>
            <Link to="/devices/zkteco">
              <Button variant="outlined" color="primary" type="submit" id="btn">
                Cancel
              </Button>
            </Link>
          </Stack>
        </Grid>
      </form>
      <Typography variant="h5" className="formError">
        {errorMsg}
      </Typography>
    </div>
  );
}

export default UpdateDevice;
