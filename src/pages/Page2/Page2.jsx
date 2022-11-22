import React from 'react'
import './page2.scss'
import logo from '../images/logo.png'

function Page2() {
  return (
    <div className="page2">
      <nav>
        <img src={logo} alt="" />
        <div className="buttonArea">
          <button>手寫簽名</button>
          <button className="active">匯入簽名檔</button>
        </div>
      </nav>
      <div className="circleContainer">
        <div className="active"></div>
        <div></div>
        <div></div>
      </div>
      <div className="sign">
        <div>在此書寫你的簽名</div>
      </div>
      <div className="buttonArea2">
        <button>清除</button>
        <button>建立簽名</button>
      </div>
    </div>
  )
}

export default Page2
