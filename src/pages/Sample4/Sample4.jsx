import React, { useState } from 'react'
import PdfViewerComponent from './PdfViewerComponent'
function Sample4() {
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
      <div className="PDF-viewer">
        <PdfViewerComponent document={'document.pdf'} />
      </div>
    </div>
  )
}

export default Sample4
