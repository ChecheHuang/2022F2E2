import React from 'react'
import { useDrag } from 'react-dnd'

function Picture({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <img
      ref={drag}
      style={{ margin: '5px', border: isDragging ? '5px solid pink' : '0px' }}
      src={url}
      width="150px"
      alt=""
    />
  )
}

export default Picture
