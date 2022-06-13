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

export default function Data() {

    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const { bus } = cms
    const data = bus[collection]
    if (!data) return null
    const { shape } = data
    let defaultExpanded = true
    defaultExpanded = true


    

    return (
        <Accordion defaultExpanded={ defaultExpanded }>
            <AccordionSummary
                id="formAccordion"
                expandIcon={<Icon icon="acc" />}>
                <Typography variant="body2" color="secondary" sx={{}}>
                    Data
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                MUI datagrid component
            </AccordionDetails>

        </Accordion>
    )
}
