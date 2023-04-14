import React from 'react'
import { Link } from 'react-router-dom'
import './AuthorisePage.css'
import { Button, Stack } from '@mui/material'

function AuthorisePage() {
  return (
    <div>
        <div className='login-box'>
        <Stack direction="row" spacing={2}>
        <Link to="/devices/zkteco"><Button variant="outlined">ZkTeco-Devices</Button></Link>
        <Link to="/devices/amazon"><Button variant="outlined">Amazon-Devices</Button></Link>
        </Stack>
        </div>
    </div>
  )
}

export default AuthorisePage