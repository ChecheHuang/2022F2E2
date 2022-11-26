import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import './sample3.scss'
function Sample3() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }
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
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }
  function changePageBack(offset) {
    changePage(-1)
  }
  function changePageNext(offset) {
    changePage(+1)
  }

  return (
    <div>
      <input onChange={handleFile} type="file" style={{ display: 'block' }} />
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={changePageBack}> 上一頁</button>
      <button onClick={changePageNext}> 下一頁</button>

      <div className="sample3">
        {pdfFile && (
          <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
            <Page height="600" pageNumber={pageNumber} />
            {/* {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                height="600"
                pageNumber={pageNumber}
              />
            ))} */}
          </Document>
        )}
      </div>
    </div>
  )
}

export default Sample3
