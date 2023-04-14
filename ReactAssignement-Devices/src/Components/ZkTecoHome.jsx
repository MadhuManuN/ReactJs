import React, { useState } from "react";

import company from "./zkteco.jpg";
import "./NavBar.css";
import useFetch from "./UseFetch";
import NavBar from "./NavBar";
import Devices from "./Devices";

function ZkTecoHome() {
  // http://localhost:8081/devices
  let { data: devices } = useFetch("http://localhost:8081/device/list");
  let [add, setAdd] = useState(true);

  return (
    <div className="zkHome">
      <NavBar image1={company} yes={add} />
      {/* {error && <h2>{error}</h2>} */}
      {devices && (
        <div>
          <Devices devices={devices} title={"ZK-TECO DEVICES"} />
        </div>
      )}
    </div>
  );
}

export default ZkTecoHome;
