import React from 'react'

export const ChildFour = ({name}) => {
    console.log('ChildFour Render')

    const date = new Date()
  return (
    <div>
        Hello {name}. It's currently {date.getHours()}: {date.getMinutes()}:{' '} {date.getSeconds()} 
    </div>
  )
}

export const MemoizedChildFour = React.memo(ChildFour)
