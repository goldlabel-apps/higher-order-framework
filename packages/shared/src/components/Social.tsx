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
    const { list } = admin.bus.links
    // console.warn( "list", list )

    let social = []
    if (list) {
        social = list
    }

    return (
        <List dense>
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
                                    <ListItemIcon sx={{ml:-1.5}}>
                                        <Tooltip color="primary" title={label}>
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
    )
}
