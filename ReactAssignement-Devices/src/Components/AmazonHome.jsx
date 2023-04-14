import React from 'react'
import amazon from './amazon.jpg'
import useFetch from './UseFetch';
import NavBar from './NavBar';
import Devices from './Devices';

function AmazonHome() {
  const add=false;
  let {data : devices}=useFetch("http://localhost:8081/device/list");
    
    return (
        <div>
            <NavBar image2={amazon} no={add}/>
            { devices && <div><Devices devices={devices} title={"AMAZON DEVICES"} />
           </div>}

           


        </div>
    )
}

export default AmazonHome