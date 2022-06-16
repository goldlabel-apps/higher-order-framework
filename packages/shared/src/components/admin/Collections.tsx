import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    setCms,
    selectCms,
    Icon,
} from '../../listingslab-shared'
import {
    useTheme,
    useMediaQuery,
    Box,
    ListItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'

export default function Collections() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    let defaultExpanded = false
    if (!isMobile) defaultExpanded = true

    const onCollectionClick = (collection: string) => {
        dispatch(setCms({ key: 'collection', value: collection }))
        dispatch(setCms({ key: 'mode', value: 'read' }))
        return true
    }

    return (
        <Box sx={{}}>

            <ListItem
                button
                onClick={() => {
                    onCollectionClick('sites')
                }}
            >
                <ListItemIcon>
                    <IconButton color="secondary">
                        <Icon icon="sites" />
                    </IconButton>
                </ListItemIcon>
                <ListItemText
                    primary="Sites"
                    secondary="Manage Higher Order Frameworks"
                />
                <Typography variant="body2"></Typography>
            </ListItem>

            <ListItem
                button
                onClick={() => {
                    onCollectionClick('posts')
                }}
            >
                <ListItemIcon>
                    <IconButton color="secondary">
                        <Icon icon="post" />
                    </IconButton>
                </ListItemIcon>
                <ListItemText primary="Posts" secondary="Manage content" />
                <Typography variant="body2"></Typography>
            </ListItem>

            <ListItem
                button
                onClick={() => {
                    onCollectionClick('links')
                }}
            >
                <ListItemIcon>
                    <IconButton color="secondary">
                        <Icon icon="link" />
                    </IconButton>
                </ListItemIcon>
                <ListItemText primary="Links" secondary="Manage links" />
                <Typography variant="body2"></Typography>
            </ListItem>
        </Box>
    )
}

/*
<Typography variant="body2" color="primary">
    Manage collections on Firebase Cloud
</Typography>



<ListItem
    button
    onClick={() => {
        onCollectionClick('categories')
    }}
>
    <ListItemIcon>
        <Icon icon="categories" />
    </ListItemIcon>
    <ListItemText primary="Categories" secondary="sections" />
    <Typography variant="body2"></Typography>
</ListItem>

<ListItem
    button
    onClick={() => {
        onCollectionClick('keywords')
    }}
>
    <ListItemIcon>
        <Icon icon="keywords" />
    </ListItemIcon>
    <ListItemText primary="Keywords" secondary="tags" />
    <Typography variant="body2"></Typography>
</ListItem>
*/
