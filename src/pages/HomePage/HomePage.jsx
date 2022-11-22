import React, { useCallback } from 'react'
import './homePage.scss'
import rightDown from '../images/rightDown.png'
import right1 from '../images/right1.png'
import right2 from '../images/right2.png'
import right3 from '../images/right3.png'
import right4 from '../images/right4.png'
import right5 from '../images/right5.png'
import dragFileIcon from '../images/dragFileIcon.png'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { updateSuccess } from '../../redux/fileSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading/Loading'
function HomePage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [openModel, setOpenModel] = useState(false)
  const [modelInfo, setModelInfo] = useState('')

  const onDrop = useCallback((acceptedFiles) => {
    const selectedFile = acceptedFiles[0]

    if (!selectedFile.type.includes('pdf')) {
      setModelInfo('檔案格式錯誤，請重新選擇')
      setOpenModel(true)
      return
    }
    if (selectedFile.size > 10485760) {
      setModelInfo('檔案超過10MB，請重新選擇')
      setOpenModel(true)
      return
    }
    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onloadend = (e) => {
      dispatch(updateSuccess(e.target.result))
      setLoading(true)
      setTimeout(() => {
        navigate('/page2')
      }, 5000)
    }
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className="homePage">
      <div className="leftDownBg"></div>
      <div className="leftDown1"></div>
      <div className="rightUp"></div>
      <nav>
        <div className="logo"></div>
        <button>歷史紀錄</button>
      </nav>
      {openModel && (
        <div className="alert">
          <div className="text">{modelInfo}</div>
          <button
            onClick={() => {
              setOpenModel(false)
            }}
          >
            確定
          </button>
        </div>
      )}

      {loading ? (
        <div className="loadingContainer">
          <Loading />
          上傳中...
        </div>
      ) : (
        <div className="container">
          <button>免費試用版</button>
          <div className="title">小綠簽</div>
          <div className="description">
            護樹、永續、減碳的綠色生活
            <br />
            響應環保無紙化電子簽屬，
            <br />
            省時便利又環保。
          </div>
          <div {...getRootProps()} className="fileContainer">
            <div className="filImgContainer">
              <img src={dragFileIcon} alt="" />
            </div>

            <label htmlFor="">選擇檔案</label>
            <input
              {...getInputProps()}
              // onChange={handleUploadFile}
              type="file"
              id="upload"
              style={{ display: 'none' }}
            />
            <div className="remind">或拖移檔案到此處</div>
            <div className="remind2">(限10MB內的PDF檔)</div>
          </div>
          <div className="imgContainer">
            <div>
              <img src={rightDown} alt="" className="rightDown" />
              <img src={right1} alt="" className="right1" />
              <img src={right2} alt="" className="right2" />
              <img src={right3} alt="" className="right3" />
              <img src={right5} alt="" className="right5" />
              <img src={right4} alt="" className="right4" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
