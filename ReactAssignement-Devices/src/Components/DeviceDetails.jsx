import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import UseFetch from "./UseFetch";
import company from "./zkteco.jpg";
import "./DeviceDetails.css";
import { Button, Stack, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import UpdateIcon from "@mui/icons-material/Update";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import amazon from './amazon.jpg'

function DeviceDetails() {
  let { id, title } = useParams();
  let reDirectPage = useHistory();
  let useBtn = true;
  const add1 = true;
  let add2 = false;
  console.log(title);
  if (title === "AMAZON DEVICES") {
    useBtn = false;
  } else {
    useBtn = true;
  }

  let { data: device } = UseFetch(`http://localhost:8081/device/${id}`);
  let handleDelete = (id) => {
    fetch(`http://localhost:8081/device/${id}`, { method: "DELETE" }).then(
      () => {
        alert("Item has been Deleted");
        reDirectPage.push("/devices/zkteco");
        // window.location.reload();
      }
    );
  };

  return (
    <div className="head">
      <NavBar
        image1={company}
        image2={amazon}
        yes={add1}
        no={add2}
        title={title}
      />
      <div className="parent1">
        <Typography variant="h3" className="dName">
          Device Details
        </Typography>
        {device && (
          <div className="child1">
            <img
              className="img"
              src={`data:image/jpeg;base64,${device.photo}`}
              id="imgInfo"
            />
            <Stack direction="column" spacing={1}>
              <h2>{device.name}</h2>
              <h4>{device.type}</h4>
              <Typography variant="body1" gutterBottom>
                {device.description}
              </Typography>
              <h3>
                M.R.P
                <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                {device.price}
              </h3>
              <Stack direction="row" spacing={1} className="btn">
                {useBtn === true && (
                  <Link to={`/update/${id}`}>
                    <Button variant="contained" endIcon={<UpdateIcon />}>
                      Update
                    </Button>
                  </Link>
                )}
                {useBtn === true && (
                  <Link to="">
                    <Button
                      variant="contained"
                      endIcon={<AutoDeleteIcon />}
                      onClick={() => {
                        handleDelete(device.id);
                      }}
                    >
                      Delete
                    </Button>
                  </Link>
                )}
              </Stack>
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeviceDetails;
