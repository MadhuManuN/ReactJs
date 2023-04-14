import React, { Component } from 'react'

export default class Car extends Component {
    constructor(props){
        super(props);
        this.state={brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964}
    }
    changeColor=()=>{
        if(this.state.color==="red"){
            this.setState({color:"Blue",brand:"Audi" ,model:"A7",year: 1980})
        }
        else{
            this.setState({color:"red",brand:"Ford",model:"Mustang",year: 1964})
        }
    }
  render() {
    return (
      <div>
         <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} colored and {this.state.model} model
          from {this.state.year}.
        </p>

        <button onClick={this.changeColor}> Click To Change the color,Brand and Model</button>
      </div>
    )
  }
}
