import React from 'react'
import { useState } from 'react'

import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
function Sample() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const [pdfFile, setPdfFile] = useState(null)
  const handleFile = (e) => {
    let selectedFile = e.target.files[0]
    // console.log(selectedFile.type)
    const reader = new FileReader()
    reader.readAsDataURL(selectedFile)
    reader.onloadend = (e) => {
      setPdfFile(e.target.result)
    }
  }

  return (
    <div>
      <input onChange={handleFile} type="file" />
      {pdfFile && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
          <Viewer
            plugins={[defaultLayoutPluginInstance]}
            fileUrl={pdfFile}
          ></Viewer>
        </Worker>
      )}
    </div>
  )
}

export default Sample
