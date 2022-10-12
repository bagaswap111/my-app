import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
      this.setState(
        {
          count: this.state.count + 1
        }, () => {
          console.log('Callback increment',this.state.count)
        }
      )
      console.log('Before increment',this.state.count)
    }


    multiincrement() {
      this.setState(prevState => ({
        count: prevState.count + 1
      }))
      console.log('Before increment',this.state.count)
    }

    incrementFive() {
      this.multiincrement()
      this.multiincrement()
      this.multiincrement()
      this.multiincrement()
      this.multiincrement()
    }
    
    reset() {
      this.setState({
        count: 0
      }, () => {
        console.log('Reset to ',this.state.count)
      })
    }
    
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    )
  }
}

export default Counter