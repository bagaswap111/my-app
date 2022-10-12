import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return <h1>Halo {this.props.name} a.k.a {this.props.heroName} class </h1>
    }
}

export default Welcome