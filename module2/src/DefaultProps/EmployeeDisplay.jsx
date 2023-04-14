import React from "react";

function EmployeeDisplay({ ename, age, imgUrl,children}) {
  return (
    <div>
      <h2>Name: {ename}</h2>
      <h3>Profile: {imgUrl}</h3>
      <h3>Age: {age}</h3>
      <h2>{children}</h2>

    </div>
  );
}
EmployeeDisplay.defaultProps ={
    ename:"No Person",
    age:"Confidential Data"
};

export default EmployeeDisplay;
