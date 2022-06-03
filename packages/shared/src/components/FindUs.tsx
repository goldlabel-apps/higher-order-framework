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
import { 
    Icon,
 } from '../listingslab-shared'

export default function FindUs(props) {
    const title = 'Find Us'
    const { defaultExpanded } = props
    const dispatch = useAppDispatch()
    const theme = useTheme()

    const social = []
    return (
        <Accordion sx={{ boxShadow: 'none' }} defaultExpanded={defaultExpanded}>
            <AccordionSummary
                id="socialAccordion"
                expandIcon={<Icon icon="acc" />}
            >
                <Typography variant="body1" sx={{}}>
                    {title}
                </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ p: 0, background: 'white' }}>
                <List dense>
                    {social.length ? (
                        <React.Fragment>
                            {social.map((item, i) => {
                                const { label, icon, url } = item
                                return (
                                    <React.Fragment key={`social_${i}`}>
                                        <ListItem
                                            button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                // dispatch(
                                                //     navigateTo({
                                                //         pathname: url,
                                                //         target: '_blank',
                                                //     })
                                                // )
                                            }}
                                        >
                                            <ListItemIcon>
                                                <Tooltip
                                                    color="primary"
                                                    title={label}
                                                >
                                                    <IconButton
                                                        color="primary"
                                                        sx={{ mr: 1 }}
                                                    >
                                                        <Icon icon={icon} />
                                                    </IconButton>
                                                </Tooltip>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="body2">
                                                        {label}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>
                                    </React.Fragment>
                                )
                            })}
                        </React.Fragment>
                    ) : null}
                </List>
            </AccordionDetails>
        </Accordion>
    )
}
