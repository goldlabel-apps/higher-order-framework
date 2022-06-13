import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    selectCms,
    Icon,
} from '../../listingslab-shared'
import { 
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'

export default function Shape() {

    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const { bus } = cms
    const data = bus[collection]
    if (!data) return null
    const { shape } = data
    
    return (
        <Accordion>
            <AccordionSummary
                id="socialAccordion"
                expandIcon={<Icon icon="acc" />}
            >
                <Typography variant="body1" sx={{}}>
                    {collection } shape
                </Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <pre>shape { JSON.stringify( shape, null, 2 ) }</pre>
            </AccordionDetails>
        </Accordion>
    )
}
