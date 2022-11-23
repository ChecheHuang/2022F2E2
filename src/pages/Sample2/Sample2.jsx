import React, { useEffect, useRef } from 'react'

function Sample2() {
  const myCanvas = useRef()
  useEffect(() => {
    const context = myCanvas.current.getContext('2d')
    const image = new Image()
    image.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png'
    image.onload = () => {
      context.drawImage(image, 0, 0, 300, 300)
    }
  }, [])
  return <canvas ref={myCanvas} width={500} height={500} />
}

export default Sample2
