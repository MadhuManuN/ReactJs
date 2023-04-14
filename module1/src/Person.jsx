import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props);
        this.state={favColor:"Red"}
    }
    // static getDerivedStateFromProps(props,state){
    //     return {favColor:props.fcolor}
    // }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favColor: "yellow"})
          }, 5000)

    }
  render() {
    return (
      <div>
        <h2>Component Mounting SetTimeOut</h2>
        <h1>My Favorite Color is {this.state.favColor}</h1>
      </div>
    )
  }
}
