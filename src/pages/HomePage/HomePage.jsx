import React from 'react'
import './homePage.scss'
import rightDown from '../images/rightDown.png'
import right1 from '../images/right1.png'
import right2 from '../images/right2.png'
import right3 from '../images/right3.png'
import right4 from '../images/right4.png'
import right5 from '../images/right5.png'
import dragFileIcon from '../images/dragFileIcon.png'
import { useState } from 'react'
function HomePage() {
  const [openModel, setOpenModel] = useState(false)

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
          <div className="text">檔案超過10MB，請重新選擇</div>
          <button
            onClick={() => {
              setOpenModel(false)
            }}
          >
            確定
          </button>
        </div>
      )}

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
        <div className="fileContainer">
          <img src={dragFileIcon} alt="" />
          <label htmlFor="upload">選擇檔案</label>
          <input type="file" id="upload" style={{ display: 'none' }} />
          <div className="remind">或拖移檔案到此處</div>
          <div className="remind2">(限10MB內的PDF或JPG檔)</div>
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
    </div>
  )
}

export default HomePage
