import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }

  changeState() {
    this.setState(prevState => ({
        isLoggedIn:!prevState.isLoggedIn
    }))
  }
  
    render() {
        return (
            this.state.isLoggedIn ?
            <div>Welcome Bagas</div> :
            <div>Welcom Guest</div>)

            // return this.state.isLoggedIn && <div>Welcome Bagas</div>
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Bagas</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <button onClick={() => this.changeState()}>change state</button>
        //         <div>{message}</div>
        //     </div>
        // )
    // return (
    //     <div>
    //         <div>Welcome Bagas</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting