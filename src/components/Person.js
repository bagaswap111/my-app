import React from 'react'

function Person({person}) {
    console.log(person)
  return (
    <div>
        <h2>I'm {person.name}, age {person.age}, and can do {person.skill}</h2>
    </div>
  )
}

export default Person