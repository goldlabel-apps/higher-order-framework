import * as React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    Icon,
    openLink,
    selectAdmin,
} from '../listingslab-shared'

export default function FindUs() {
    const dispatch = useAppDispatch()
    const admin = useAppSelector(selectAdmin)
    const { links } = admin.bus
    if (!links) return null
    const { list } = links
    let social = []
    if (list) {
        social = list
    }

    return (
        <List dense sx={{ m: 1, mb: 6 }}>
            {social.length ? (
                <React.Fragment>
                    {social.map((item, i) => {
                        const { id } = item
                        if (id === '_shape') return null
                        const { label, icon, url } = item.data

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
                                   
                                    <ListItemText
                                        primary={
                                            <Typography variant="body2">
                                                {label}
                                            </Typography>
                                        }
                                    />

                                    <ListItemIcon sx={{ ml: 0 }}>
                                        <Tooltip color="primary" title={label}>
                                            <IconButton
                                                color="primary"
                                                sx={{ mr: 1 }}
                                            >
                                                <Icon icon={icon} />
                                            </IconButton>
                                        </Tooltip>
                                    </ListItemIcon>


                                </ListItem>
                            </React.Fragment>
                        )
                    })}
                </React.Fragment>
            ) : null}
        </List>
    )
}
