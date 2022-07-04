import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    selectAdmin,
    Icon,
} from '../../../listingslab-shared'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from '@mui/material'

export default function Shape() {
    const cms = useAppSelector(selectAdmin)
    const { collection } = cms.data

    // console.warn("cms.data", cms.data)

    const { bus } = cms
    const data = bus[collection]
    if (!data) return null

    const { list } = data

    let shape = null
    if (list.length) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === '_shape') shape = list[i]
        }
    }
    if (!shape) return null
    let defaultExpanded = true
    defaultExpanded = true
    return (
        <Accordion defaultExpanded={defaultExpanded} sx={{ boxShadow: 'none' }}>
            <AccordionSummary
                id="socialAccordion"
                expandIcon={<Icon icon="acc" />}
            >
                <Typography variant="body2">Shape</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <pre>{JSON.stringify(shape.data, null, 2)}</pre>
            </AccordionDetails>
        </Accordion>
    )
}
/*

*/
