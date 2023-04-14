import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Devices.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Typography } from '@mui/material';

function Devices({devices,title}) {
    let[dTitle,setDTitle]=useState(true)
    console.log("hi")
  
    return (
        <div>
            <div className='title'>
            <span>{title}</span>
            </div>
            <section className='parent'>
                {
                    devices?.map((device, index) => {
                        return (
                            <div key={index} className='child'>
                                <Link to={`/device/${device.id}/${title}`}>
                                <img className='img' src={`data:image/jpeg;base64,${device.photo}`} id="imgCard"/>
                                <h3>{device.name}</h3>
                                <Typography variant="subtitle1" display="block" className='type'>{device.type}</Typography>
                                <span>M.R.P <CurrencyRupeeIcon sx={{ fontSize: 15 }} />{device.price}</span> 
                                </Link>
                            </div>
                        )
                    })
                }
            </section>

        </div>
    )
}

export default Devices