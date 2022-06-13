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

export default function Form() {

    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const { bus } = cms
    const data = bus[collection]
    if (!data) return null
    const { shape } = data
    
    return (
        <Accordion defaultExpanded>
            <AccordionSummary
                id="formAccordion"
                expandIcon={<Icon icon="acc" />}>
                <Typography variant="body2" color="secondary" sx={{}}>
                    {collection } form
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                A Form. Dynamically made from the shape
            </AccordionDetails>

        </Accordion>
    )
}
