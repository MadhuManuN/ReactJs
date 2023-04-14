import React, { Component } from 'react'

export default class HeaderUpdate extends Component {
    constructor(props){
        super(props);
        this.state={favColor:"red"}
    }

    // static getDerivedStateFromProps(props,state){
    //     return {favColor:props.fcolor}
    // }
    shouldComponentUpdate(nextProps, nextState, nextContext)
    {
        return false;
    }
    changeColor=()=>{
        this.setState({favColor:"blue"})
    }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favColor}</h1>
       <button type="button" onClick={this.changeColor}>Change color</button>
       <p>But since the getDerivedStateFromProps() method is called, which updates the state with the color from the fcolor attribute</p>
      </div>
    )
  }
}
