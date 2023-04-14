import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import NavBar from './NavBar';
import UseFetch from './UseFetch';
import amazon from './amazon.jpg'
import './DeviceDetails.css'
import { Button, Stack, Typography } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


function DeviceDetailsAmazon() {
    let { id } = useParams();
    let reDirectPage = useHistory();
    let[add,setAdd]=useState(false)

    let { data: device} = UseFetch(`http://localhost:8081/device/${id}`);
    let handleDelete=(id)=>{
        fetch(`http://localhost:8081/device/${id}`,{method:"DELETE"})
        .then(()=>{
            alert("Item has been Deleted");
            reDirectPage.push("/devices/zkteco");
            // window.location.reload();
        })
    }

    return (
        <div className='head'>
            <NavBar image={amazon} addDevice={add}/>
            <div className='parent1'>
            <Typography variant="h3" className="dName">Device Details</Typography>
            {device && <div className='child1'>
                <img className='img'src={`data:image/jpeg;base64,${device.photo}`} id="imgInfo"/>
                <Stack direction="column" spacing={1} >
                <h2>{device.name}</h2>
                <h4>{device.type}</h4>
                <Typography variant="body1" gutterBottom>{device.description}</Typography>
                <h3>M.R.P<CurrencyRupeeIcon sx={{ fontSize: 15 }} />{device.price}</h3>
                </Stack>
            </div>}
            </div>
        </div>
    )
}

export default DeviceDetailsAmazon