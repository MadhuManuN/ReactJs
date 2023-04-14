import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';
import classes from './AddUser.module.css'

function AddUsers(props) {
    let[userName,setUserName]=useState('');
    let[age,setAge]=useState(0);
    let[error,setError]=useState();
    let addUserHandler=(e)=>{
        e.preventDefault();
        if(userName.trim().length===0 || age.trim().length===0){
            setError({
                title:'Invalid Input',
                message:"Please Enter a valid name and age"
            })
            return;
        }
        if(+age<1){
            setError({
                title:'Invalid Age',
                message:"Please Enter a valid age(>0)."
            })
            return;
        }
        console.log(userName,age)
        props.onAddUser(userName,age);
        setUserName("")
        setAge("")
    }
    let nameChangeHandler=(event)=>{
        setUserName(event.target.value);
    }
    let ageChangeHandler=(event)=>{
        setAge(event.target.value);
    }
    let errorHandler=()=>{
        setError(null)
    }
  return (
    <div>
       {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form action="" onSubmit={addUserHandler}>
            <label htmlFor="usereName">UserName: </label>
            <input type="text" id='usereName' value={userName} onChange={nameChangeHandler}/>
            <label htmlFor="age">Age(Years): </label>
            <input type="number" id='age' value={age} onChange={ageChangeHandler}/>
            <Button type='submit'>Add User</Button>
        </form>
    </Card>
    </div>
  )
}

export default AddUsers