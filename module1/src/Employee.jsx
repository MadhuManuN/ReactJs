import React from 'react'
import Car from './Car'
import GetSnapshotBeforeUpdate from './GetSnapshotBeforeUpdate'
import HeaderUpdate from './HeaderUpdate'
import Person from './Person'

function Employee({ename,age,company}) {
  return (
    <div>
        <h3>My Name is {ename} and I am working in {company}</h3>
        <h3>Age is {age}</h3>
        <hr/>
        <Car cname="Ford"/>
        <hr/>
        <br/>
        <Person fcolor="Blue"/>
        <hr/>
        <HeaderUpdate fcolor="Green"/>
        <hr/>
        <GetSnapshotBeforeUpdate/>
    </div>
  )
}

export default Employee