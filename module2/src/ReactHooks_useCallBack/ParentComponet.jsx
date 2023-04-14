import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponet() {
    let[age,setAge]=useState(18);
    let[salary,setSalary]=useState(50000);

    let incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age]) 

    let incrementSalary=useCallback(()=>{
        setSalary(salary+1000);
    },[salary])
    
  return (
    <div>
        <Title/>
        <Count text="Age" count={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="salary" count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponet