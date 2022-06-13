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

export default function FindUs(props) {
    const title = 'Find us on the social'
    const { defaultExpanded } = props

    const social = [
        {
            label: 'GitHub',
            icon: 'github',
            title: 'Organisation',
            url: 'https://github.com/orgs/listingslab-software',
        },
        {
            label: 'LinkedIn',
            icon: 'linkedin',
            title: 'Profile',
            url: 'https://www.linkedin.com/in/listingslab/',
        },
        {
            label: 'Facebook',
            icon: 'facebook',
            title: 'Page',
            url: 'https://www.facebook.com/listingslabspage/',
        },
        {
            label: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/listingslab',
        },
        {
            label: 'YouTube',
            icon: 'youtube',
            title: 'Channel',
            url: 'https://www.youtube.com/channel/UCI26fo5NE7RdB1MysoCr66A',
        },
        {
            label: 'Vimeo',
            icon: 'vimeo',
            title: 'Videos',
            url: 'https://vimeo.com/listingslab',
        },
        {
            label: 'Instagram',
            icon: 'instagram',
            title: 'Photos',
            url: 'https://www.instagram.com/listingslab.photos/',
        },

        {
            label: 'Flickr',
            icon: 'flickr',
            title: 'Photos',
            url: 'https://www.flickr.com/photos/listingslab/',
        },
    ]

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
