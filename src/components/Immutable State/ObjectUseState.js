import React, { useState } from 'react'

const initState = {
    fname: 'David',
    lname: 'Scott'
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)
    const changeName = () => {
        // person.fname = 'John'
        // person.lname = 'Doe'
        // setPerson(person)
        const newPerson = {...person}
        newPerson.fname = 'Clark'
        newPerson.lname = 'Kent'
        setPerson(newPerson)
    }

    console.log('ObjectUseState render')
  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
