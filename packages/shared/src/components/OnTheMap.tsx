import * as React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
    useTheme,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material'
import { Icon } from '../listingslab-shared'

export default function OnTheMap(props) {
    const title = 'on the map'
    const { defaultExpanded } = props

    return (
        <Accordion sx={{ boxShadow: 'none' }} defaultExpanded={defaultExpanded}>
            <AccordionSummary
                id="socialAccordion"
                expandIcon={<Icon icon="acc" />}
            >
                <Typography variant="body1">{title}</Typography>
            </AccordionSummary>

            <AccordionDetails>OnTheMap</AccordionDetails>
        </Accordion>
    )
}
