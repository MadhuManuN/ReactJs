import React, { useContext } from "react";
import { EmployeeContext, CompanyContext } from "./ParentComp";

function Child_D() {
  const eData = useContext(EmployeeContext);
  const cData = useContext(CompanyContext);
  return (
    <div>
      <h1>Good Morning! This is  {eData}</h1>
      <h3>
        Working in a {cData.cName} Company in {cData.place}
      </h3>
    </div>
  );
}

export default Child_D;
