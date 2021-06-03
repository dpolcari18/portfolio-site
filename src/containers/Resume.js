import React from 'react'

// react-pdf
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// react semantic
import { Grid } from 'semantic-ui-react'

import file from '../content/resume.pdf'

const Resume = () => {
    return (
        <Grid className='view align_view' id='resume_id'>
            <Grid.Row id='resume_row'>
                <a href={file} download title='Click to Download PDF'>
                    <Document file={file}>
                        <Page pageNumber={1} height={850} />
                    </Document>
                </a>
            </Grid.Row>
        </Grid>
    )
}

export default Resume