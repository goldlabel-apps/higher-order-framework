import * as React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Typography,
} from '@mui/material'
import { Icon, selectAdmin, openLink } from '../listingslab-shared'

export default function Social(props: any) {
    const title = 'On the social'
    const { defaultExpanded } = props
    const dispatch = useAppDispatch()
    const admin = useAppSelector(selectAdmin)
    const { links } = admin.bus
    if (!links) return null
    const { list } = links
    let social = []
    if (list) social = list

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

            <AccordionDetails>
                <List dense sx={{ m: 0 }}>
                    {social.length ? (
                        <React.Fragment>
                            {social.map((item, i) => {
                                const { id } = item
                                if (id === '_shape') return null
                                const { label, icon, url, hidden } = item.data
                                if (hidden) return null
                                return (
                                    <React.Fragment key={`social_${i}`}>
                                        <ListItem
                                            button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                dispatch(
                                                    openLink({
                                                        url,
                                                        target: '_blank',
                                                    })
                                                )
                                            }}
                                        >
                                            <ListItemIcon sx={{ ml: 0 }}>
                                                <IconButton
                                                    color="primary"
                                                    sx={{ mr: 1 }}
                                                >
                                                    <Icon icon={icon} />
                                                </IconButton>
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
