import React from "react";
import PropTypes from 'prop-types';

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

EmployeeDisplay.propTypes={
  ename: PropTypes.string,
  age: PropTypes.number,
  imgUrl : PropTypes.string
} 


export default EmployeeDisplay;
