import React from 'react'
import './homePage.scss'
import rightDown from '../images/rightDown.png'
import right1 from '../images/right1.png'
import right2 from '../images/right2.png'
import right3 from '../images/right3.png'
import right4 from '../images/right4.png'
import right5 from '../images/right5.png'
function HomePage() {
  return (
    <div className="homePage">
      <div className="leftDownBg"></div>
      <div className="leftDown1"></div>
      <div className="rightUp"></div>
      <nav>
        <div className="logo"></div>
        <button>歷史紀錄</button>
      </nav>
      <div></div>
      <div className="container">
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
