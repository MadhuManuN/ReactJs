import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddProducts from './AddProducts'
import Home from './Home'

function Authoriser() {
  return (
    <div>
        <div className='login-box'>
        <Link to="/user"><button >User</button></Link>
        <Link to="/admin"><button >Admin</button></Link>
        </div>
    </div>
  )
}

export default Authoriser