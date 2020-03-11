import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    // console.log(this.props);
    return (
      //make sure to ask why does this needs to be an arrow function when you pass in a
      // call back instead of just invoking the function without it
      <div onClick={() => this.props.handleColorChange(getRandomColor())}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
    // return (
    //   <div onClick={() => this.props.handleColorChange(getRandomColor())}
    //     className="child"
    //     style={{backgroundColor: this.props.color}}
    //   ></div>
    // )
    
  }
}

export default Child
