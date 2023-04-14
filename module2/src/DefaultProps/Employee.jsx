import React from "react";
import { employees } from "./EmployeeData";
import EmployeeDisplay from "./EmployeeDisplay";

function Employee() {
  return (
    <div>
      {employees.map(({ eid, ename, age, imgUrl,Award }) => {
        return (
          <div key={eid}>
            <EmployeeDisplay ename={ename} imgUrl={imgUrl} >{Award}</EmployeeDisplay>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Employee;
