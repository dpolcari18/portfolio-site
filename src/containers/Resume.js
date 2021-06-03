import React from 'react'

// react-pdf
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// react semantic
import { Grid } from 'semantic-ui-react'

import file from '../content/resume.pdf'

const Resume = () => {
    return (
        <Grid className='view align_view' id='resume_id'>
            <a href={file} download>
                <Document file={file} >
                    <Page pageNumber={1} height={750}/>
                </Document>
            </a>
        </Grid>
    )
}

export default Resume