import { Document, Page } from 'react-pdf'
import { useState } from 'react';
import resume from './assets/resume.pdf'
import {pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import './App.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()


function App() {
  const [numPages, setNumPages] = useState(null)

  function onLoadSuccess({ numPages: pageCount }) {
    setNumPages(pageCount)
  }
  
  return (
    <>
      <h1>My Resume</h1>
      <Document file={resume} onLoadSuccess={onLoadSuccess}>
        {Array.from({ length: numPages }, (_, index) =>
          <Page key={index} pageNumber={index + 1} width={1000} />
        )}
      </Document>
    </>
  )
}

export default App