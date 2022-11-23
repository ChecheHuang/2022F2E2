import React, { useRef } from 'react'
import './page2.scss'
import logo from '../images/logo.png'
import SignatureCanvas from 'react-signature-canvas'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateSign } from '../../redux/fileSlice'
import { useEffect } from 'react'

function Page2() {
  const dispatch = useDispatch()

  const [color, setColor] = useState('black')
  const sigCanvas = useRef({})

  const pickColorButton = ['black', 'blue', 'red']

  // useEffect(() => {
  //   const context = sigCanvas.current.getContext('2d')
  //   const image = new Image()
  //   image.src =
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png'
  //   image.onload = () => {
  //     context.drawImage(image, 0, 0, 590, 224)
  //   }
  // }, [])

  return (
    <div className="page2">
      <nav>
        <img src={logo} alt="" />
        <div className="buttonArea">
          <button>手寫簽名</button>
          <button className="active">
            <label htmlFor="fileInput">匯入簽名檔</label>
          </button>
          <input id="fileInput" type="file" />
        </div>
      </nav>
      <div className="circleContainer">
        {pickColorButton.map((item, index) => {
          const isPick = item === color
          return (
            <div
              key={index}
              onClick={() => {
                setColor(item)
              }}
              className={isPick ? 'active' : ''}
            ></div>
          )
        })}
      </div>
      <SignatureCanvas
        ref={sigCanvas}
        penColor={color}
        canvasProps={{ width: 590, height: 224, className: 'sign' }}
      />

      {/* <div>在此書寫你的簽名</div> */}
      <div className="buttonArea2">
        <button onClick={() => sigCanvas.current.clear()}>清除</button>
        <button
          onClick={() => {
            dispatch(
              updateSign(
                sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
              )
            )
            console.log(sigCanvas.current.toDataURL('image/png', 1))
          }}
        >
          建立簽名
        </button>
      </div>
    </div>
  )
}

export default Page2
