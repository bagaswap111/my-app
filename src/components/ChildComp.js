import React from 'react'

function ChildComp(props) {
  return (
    <button onClick={() => props.greetHandler('childe')}>Greet from ChildComp</button>
  )
}

export default ChildComp