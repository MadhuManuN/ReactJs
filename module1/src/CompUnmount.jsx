import React, { Component } from 'react'

export default class CompUnmount extends Component {
   componentWillUnmount(){
    alert("The Component Unmount is about to Unmount very soon")
   }
  render() {
    return (
      <div>
        <h1>Hello Madhu This Is  UnMount component</h1>
      </div>
    )
  }
}
