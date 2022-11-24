import React from 'react'
import './page3.scss'
// import { Worker } from '@react-pdf-viewer/core'
// import { Viewer } from '@react-pdf-viewer/core'
// import '@react-pdf-viewer/core/lib/styles/index.css'
import { useSelector } from 'react-redux'


function Page3() {
  const { file, sign } = useSelector((state) => state.file)

  return (
    <div className="page3">
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
