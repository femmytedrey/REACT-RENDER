import React, { useState } from 'react'

const initState = ['Bruce', 'Wayne']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)
    const handleClick = () => {
        // persons.push('Sandoval')
        // persons.push('Pedro')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push('Sandoval')
        newPersons.push('Pedro')
        setPersons(newPersons)

    }
    console.log('ArrayUseState Render')
  return (
    <div>
        <button onClick={handleClick}>Click</button>
        {
            persons.map(person => (
                <div key = {person}>{person}</div>
            ))
        }
    </div>
  )
}
