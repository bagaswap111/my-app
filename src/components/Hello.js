import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Bagaskoro jsx</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
         {id: 'hello', className: 'dummyClass'},
         React.createElement('h1', null, 'Hello Bagaskoro non jsx'))
}

export default Hello