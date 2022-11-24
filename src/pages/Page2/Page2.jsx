import React, { useRef } from 'react'
import './page2.scss'
import logo from '../images/logo.png'
import SignatureCanvas from 'react-signature-canvas'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateSign } from '../../redux/fileSlice'
import Loading from '../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom'
import useRWD from '../../customhook/useRWD'
import { useEffect } from 'react'
function Page2() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const device = useRWD()
  const [canvasSize, setConvasSize] = useState({ width: 590, height: 224 })
  useEffect(() => {
    switch (device) {
      case 'PC':
        setConvasSize({ width: 590, height: 224 })
        break
      case 'tablet':
        setConvasSize({ width: 590, height: 224 })
        break
      case 'mobile':
        setConvasSize({ width: 343, height: 200 })
        break
      default:
    }
  }, [device])

  const [color, setColor] = useState('black')
  const [signState, setSignState] = useState('canvas')
  const [uploadImage, setUploadImage] = useState(null)
  const sigCanvas = useRef()

  const [loading, setLoading] = useState(false)

  const pickColorButton = ['black', 'blue', 'red']

  const handleUploadFile = (e) => {
    if (!e.target.files[0]) return
    var reader = new FileReader()
    reader.onload = function () {
      setUploadImage(reader.result)
    }
    reader?.readAsDataURL(e?.target?.files[0])
    e.target.value = ''
  }

  if (loading) {
    return (
      <div className="loading">
        <nav>
          <img src={logo} alt="" />
        </nav>
        <div className="loadingContainer">
          <Loading />
          簽名優化中....
        </div>
      </div>
    )
  }

  return (
    <div className="page2">
      <nav>
        <img src={logo} alt="" />
        <div className="buttonArea">
          <button
            onClick={() => {
              setSignState('canvas')
            }}
            className={signState === 'canvas' ? 'active' : ''}
          >
            手寫簽名
          </button>
          <button
            onClick={() => {
              setSignState('image')
            }}
            className={signState === 'image' ? 'active' : ''}
          >
            匯入簽名檔
          </button>
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
      {signState === 'canvas' && (
        <SignatureCanvas
          ref={sigCanvas}
          penColor={color}
          canvasProps={{ ...canvasSize, className: 'sign' }}
        />
      )}
      {signState === 'image' && (
        <div className="sign">
          {uploadImage ? (
            <div className="imgContainer">
              <img src={uploadImage} alt="" />
            </div>
          ) : (
            <>
              <label htmlFor="imageFile">選擇檔案</label>
              <input onChange={handleUploadFile} id="imageFile" type="file" />
            </>
          )}
        </div>
      )}

      <div className="buttonArea2">
        <button onClick={() => sigCanvas.current.clear()}>清除</button>
        <button
          onClick={() => {
            const uploadFile =
              signState === 'canvas'
                ? sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
                : uploadImage
            if (!uploadFile) {
              alert('沒有上傳圖片')
              return
            }
            dispatch(updateSign(uploadFile))

            setLoading(true)
            setTimeout(() => {
              navigate('/page3')
            }, 1000)
          }}
        >
          建立簽名
        </button>
      </div>
    </div>
  )
}

export default Page2
