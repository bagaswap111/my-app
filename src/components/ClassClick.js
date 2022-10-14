import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler() {
        console.log('Class clicked')
    }


  render() {
    return (
      <button onClick={this.clickHandler}>ClassClick</button>
    )
  }
}

export default ClassClick