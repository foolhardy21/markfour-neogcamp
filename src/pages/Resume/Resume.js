import React, { useEffect, useContext, useState } from 'react'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
import {ThemeContext} from '../../context'
import styles from './Resume.module.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import file from './Resume.pdf'

const Resume = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        document.title = 'Resume | VinayKumar'
    },[])
    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages)
    }

    return (
        <section className={`${theme==='light' ? styles.resume_section_light : styles.resume_section_dark}`}>
            <article className={styles.pdfwrapper}>
                <Document 
                onLoadSuccess={onDocumentLoadSuccess} 
                file={file}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </article>
        </section>
    )
}

export default Resume