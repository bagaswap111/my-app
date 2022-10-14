import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Welcome'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    clickHandler2 = () => {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

    render() {
    return (
        <div>
            <div>{this.state.message}</div>
            <button onClick={this.clickHandler.bind(this)}>EventBind</button>
            <button onClick={this.clickHandler}>EventBind Const</button>
            <button onClick={this.clickHandler2}>EventBind Exp</button>
            <button onClick={() => this.clickHandler()}>EventBind Arrow</button>
        </div>
    )
  }
}

export default EventBind