import React from 'react'
import { useState } from 'react'
import './sample.scss'
//顯示
import { Worker } from '@react-pdf-viewer/core'
import { Viewer, ScrollMode } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
//放大縮小
import { zoomPlugin } from '@react-pdf-viewer/zoom'

//頁數
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'

import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode'

import { getFilePlugin } from '@react-pdf-viewer/get-file'
function Sample() {
  const getFilePluginInstance = getFilePlugin({
    fileNameGenerator: () => {
      return '完成簽署'
    },
  })
  const { Download } = getFilePluginInstance

  const scrollModePluginInstance = scrollModePlugin()
  const { SwitchScrollMode } = scrollModePluginInstance
  //頁數
  const pageNavigationPluginInstance = pageNavigationPlugin()

  const { CurrentPageLabel, GoToNextPage, GoToPreviousPage } =
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
      <div style={{ padding: '0px 2px' }}>
        <SwitchScrollMode mode={ScrollMode.Horizontal}>
          {(props) => (
            <button
              style={{
                backgroundColor: props.isSelected ? '#357edd' : 'transparent',
                borderColor: props.isSelected ? 'transparent' : '#357edd',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '4px',
                color: props.isSelected ? '#fff' : '#000',
                cursor: 'pointer',
                padding: '8px',
              }}
              onClick={props.onClick}
            >
              Horizontal scrolling
            </button>
          )}
        </SwitchScrollMode>
      </div>
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
      <div className="navigate">
        <GoToPreviousPage>
          {(props) => (
            <button
              style={{
                backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                border: 'none',
                borderRadius: '4px',
                color: '#ffffff',
                cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                padding: '8px',
              }}
              disabled={props.isDisabled}
              onClick={props.onClick}
            >
              Previous page
            </button>
          )}
        </GoToPreviousPage>
        <CurrentPageLabel>
          {(props) => (
            <>
              {`${props.currentPage + 1}
               / ${props.numberOfPages}`}
            </>
          )}
        </CurrentPageLabel>
        <GoToNextPage>
          {(props) => (
            <button
              style={{
                backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                border: 'none',
                borderRadius: '4px',
                color: '#ffffff',
                cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                padding: '8px',
              }}
              disabled={props.isDisabled}
              onClick={props.onClick}
            >
              Next page
            </button>
          )}
        </GoToNextPage>
      </div>
      <Download>
        {(props) => (
          <button
            style={{
              backgroundColor: '#357edd',
              border: 'none',
              borderRadius: '4px',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '8px',
            }}
            onClick={props.onClick}
          >
            Download
          </button>
        )}
      </Download>
      <div
        style={{
          width: '80vw',
          height: '60vh',
          margin: 'auto',
          border: '2px solid black',
        }}
        className="pdfContainer"
      >
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
            <Viewer
              plugins={[
                zoomPluginInstance,
                scrollModePluginInstance,
                pageNavigationPluginInstance,
                getFilePluginInstance,
              ]}
              fileUrl={pdfFile}
            ></Viewer>
          </Worker>
        )}
      </div>
    </div>
  )
}

export default Sample
