import React from 'react'
import { useState } from 'react'
//顯示
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
//放大縮小
import { zoomPlugin } from '@react-pdf-viewer/zoom'

//頁數
import {
  pageNavigationPlugin,
  RenderGoToPageProps,
} from '@react-pdf-viewer/page-navigation'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'

function Sample() {
  //頁數
  const pageNavigationPluginInstance = pageNavigationPlugin()
  const { GoToFirstPage, GoToLastPage, GoToNextPage, GoToPreviousPage } =
    pageNavigationPluginInstance
  //放大縮小
  const zoomPluginInstance = zoomPlugin()
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance
  //上傳檔案
  const [pdfFile, setPdfFile] = useState(null)
  const handleFile = (e) => {
    let selectedFile = e.target.files[0]
    // console.log(selectedFile.type)
    // console.log(selectedFile)
    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onloadend = (e) => {
      setPdfFile(e.target.result)
    }
  }

  return (
    <div>
      <input onChange={handleFile} type="file" style={{ display: 'block' }} />
      <div className="zoom">
        <CurrentScale>
          {(props) => <>{`${Math.round(props.scale * 100)}%`}</>}
        </CurrentScale>
        ;
        <ZoomOut>
          {(props) => (
            <button
              style={{
                width: '50px',
                height: '20px',
                background: 'white',
              }}
              onClick={props.onClick}
            >
              縮小!!
            </button>
          )}
        </ZoomOut>
        <ZoomIn>
          {(props) => (
            <button
              style={{
                width: '50px',
                height: '20px',
                background: 'white',
              }}
              onClick={props.onClick}
            >
              放大!!
            </button>
          )}
        </ZoomIn>
      </div>
      <div className="navigate"></div>

      {pdfFile && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <Viewer plugins={[zoomPluginInstance]} fileUrl={pdfFile}></Viewer>
        </Worker>
      )}
    </div>
  )
}

export default Sample
