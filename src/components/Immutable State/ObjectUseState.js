import React, {useState} from 'react'

const initState = {
    fname: 'Ayomide',
    lname: 'Adeyemo'
}

const changeName = () => {
    person.fname = 'John'
    person.lname = 'Clark'
    setPerson = (person)
}

export const objectUseState = () => {
    const [person, setPerson] = useState(initState)
  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
