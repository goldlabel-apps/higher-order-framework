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
    let defaultExpanded = true
    defaultExpanded = false
    return (
        <Accordion defaultExpanded={ defaultExpanded }>
            <AccordionSummary
                id="socialAccordion"
                expandIcon={<Icon icon="acc" />}
            >
                <Typography variant="body2" color="secondary" sx={{}}>
                    Shape
                </Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <pre>shape { JSON.stringify( shape, null, 2 ) }</pre>
            </AccordionDetails>
        </Accordion>
    )
}
