import React from 'react'
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume(){
    return(
        <div className="resume">
            <Document file="Resume.pdf">
                <Page pageNumber={1}/>
            </Document>
        </div>
    )
}

export default Resume