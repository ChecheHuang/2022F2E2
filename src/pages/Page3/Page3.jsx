import React from 'react'
import styles from './page3.module.scss'
// import { Worker } from '@react-pdf-viewer/core'
// import { Viewer } from '@react-pdf-viewer/core'
// import '@react-pdf-viewer/core/lib/styles/index.css'
import { useSelector } from 'react-redux'
import logo from '../images/logo.png'
import left from './images/left.png'
import right from './images/right.png'
import zoomIn from './images/zoom-in.png'
import zoomOut from './images/zoom-out.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

function Page3() {
  const { file, sign } = useSelector((state) => state.file)

  return (
    <div className={styles.page3}>
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.pdfContainer}></div>
      <div className={styles.down}>
        <div className={styles.pdfControl}>
          <div className={styles.item}>
            <img src={left} alt="" />
            <div>1/2</div>
            <img src={right} alt="" />
          </div>
          <div className={styles.item}>
            <img src={zoomOut} alt="" />
            <div>100%</div>
            <img src={zoomIn} alt="" />
          </div>
        </div>
        <div className={styles.pdfInput}>
          <div className={styles.item}>
            <img src={icon1} alt="" />
            簽名
          </div>
          <div className={styles.item}>
            <img src={icon2} alt="" />
            勾選
          </div>
          <div className={styles.item}>
            <img src={icon3} alt="" />
            日期
          </div>
          <div className={styles.item}>
            <img src={icon4} alt="" />
            插入文字
          </div>
        </div>
        <button>完成簽屬</button>
      </div>
      {/* {file && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <Viewer
            // plugins={[defaultLayoutPluginInstance]}
            fileUrl={file}
          ></Viewer>
        </Worker>
      )} */}
    </div>
  )
}

export default Page3
