import React, { useState } from 'react'
import { MemoizedChildThree } from './ChildThree'
import { MemoizedChildFour } from './ChildFour'

export const ParentThree = ({ children }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishwas')

    console.log('ParentThree Render')
  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
        <button onClick={() => setName('Codevolution')}>Change Name</button>
        <MemoizedChildFour name = {name} />
        {/* <MemoizedChildThree name = {name}>
            <strong>Hello</strong>
        </MemoizedChildThree> */}
    </div>
  )
}
