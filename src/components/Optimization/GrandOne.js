import React, { useState } from 'react'
import { ParentOne } from './ParentOne'
import { ChildOne } from './ChildOne'

export const GrandOne = () => {

    const [newCount, setnewCount] = useState(0)


  return (
    <div>
        <button onClick={() => setnewCount(nc => nc + 1)}>GrandParent Count - {newCount} </button>
        <ParentOne newCount = {newCount}>
            <ChildOne />
        </ParentOne>
    </div>
  )
}
