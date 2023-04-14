import logo from './logo.svg';
import './App.css';
import AddUsers from './Components/Users/AddUsers';
import UserList from './Components/Users/UserList';
import { useState } from 'react';

function App() {
  let[userList,setUserList]=useState([])

  let addUserHandler=(uName,uAge)=>{
    setUserList((prevUserList)=>{
      return[...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}];
    })
  }
  return (
    <div>
     <AddUsers onAddUser={addUserHandler}/>
     <UserList users={userList}/>
    </div>
  );
}

export default App;
