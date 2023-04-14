import React, { Component } from 'react'
import CompUnmount from './CompUnmount'

export default class GetSnapshotBeforeUpdate extends Component {
    constructor(props){
        super(props)
        this.state={favoritecolor:"Red",show:true}
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor:"Blue"})
        },4000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML=
        "Before the update, the favorite was " +prevState.favoritecolor;
    }
    componentDidUpdate( ){
        document.getElementById("div2").innerHTML=
        "After the update, the favorite was " +this.state.favoritecolor;
    }
    delComp=()=>{
        this.setState({show:false})
    }
  render() {
    let unMountComp;
    if(this.state.show==true){
        unMountComp=<CompUnmount/>
    }
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        <hr/>
        {unMountComp}
        <button onClick={this.delComp}>Unmount The Component CompUnmount</button>
      </div>
    )
  }
}
