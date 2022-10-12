import React from "react";

// function Greet(){
//     return <h1>Hello Bagaskoro</h1>
// }

const Greet = (props) => {
return (
    <div>
    <h1>Halo {props.name} a.k.a {props.heroName} </h1>
    {props.children}
    </div>
)
}
export default Greet