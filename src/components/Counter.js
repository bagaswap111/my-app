import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
      this.setState({
        count: this.state.count + 1
      })
    }
    
    reset() {
      this.setState({
        count: 0
      }, () => {
        <h1>nambah {this.state.count}</h1>
      })
    }
    
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    )
  }
}

export default Counter