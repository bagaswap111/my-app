import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    // const namesList = names.map(name => <Person name={name}></Person>)
    const persons = [
        {
            id: 1,
            name:'Bruce',
            age: 30,
            skill: 'vue'
        },
        {
            id: 2,
            name:'Clark',
            age: 34,
            skill: 'react'
        },
        {
            id: 3,
            name:'Diana',
            age: 26,
            skill: 'angular'
        }]
    const personsList = persons.map(person => <Person person={person}></Person>)
    return (
    <div>
        {/* <div>{namesList}</div> */}
        <div>{personsList}</div>
    </div>
    )
}

export default NameList