import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import Picture from './Picture'
const PictureList = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/8388229/pexels-photo-8388229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/14437082/pexels-photo-14437082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/8619615/pexels-photo-8619615.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

function DragDrop() {
  const [board, setBoard] = useState([])

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))
  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id)
    setBoard((board) => [...board, pictureList[0]])
  }

  return (
    <>
      <div className="Picture">
        {PictureList.map((picture, index) => {
          return <Picture key={index} url={picture.url} id={picture.id} />
        })}
      </div>
      <div
        style={{ width: '300px', height: '500px', border: '2px solid black' }}
        className="Board"
        ref={drop}
      >
        {board.map((picture, index) => {
          return <Picture key={index} url={picture.url} id={picture.id} />
        })}
      </div>
    </>
  )
}

export default DragDrop
