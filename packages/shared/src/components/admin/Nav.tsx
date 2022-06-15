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
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    MenuItem,
    IconButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material'

export default function Nav() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    let defaultExpanded = false
    if (!isMobile) defaultExpanded = true

    const onCollectionClick = (collection: string) => {
        dispatch(setCms({ key: 'collection', value: collection }))
        dispatch(setCms({ key: 'mode', value: "read" }))
        return true
    }

    return (
        <Box sx={{ m: 2 }}>
            <MenuItem
                onClick={() => {
                    onCollectionClick('posts')
                }}
            >
                <ListItemIcon>
                    <Icon icon="post" />
                </ListItemIcon>
                <ListItemText>posts</ListItemText>
                <Typography variant="body2"></Typography>
            </MenuItem>

            
        </Box>
    )
}

/*
<Typography variant="body2" color="primary">
    Manage collections on Firebase Cloud
</Typography>

<MenuItem
                onClick={() => {
                    onCollectionClick('links')
                }}
            >
                <ListItemIcon>
                    <Icon icon="link" />
                </ListItemIcon>
                <ListItemText>links</ListItemText>
                <Typography variant="body2"></Typography>
            </MenuItem>

            <MenuItem
                onClick={() => {
                    onCollectionClick('siteinfo')
                }}
            >
                <ListItemIcon>
                    <Icon icon="admin" />
                </ListItemIcon>
                <ListItemText>sites</ListItemText>
                <Typography variant="body2"></Typography>
            </MenuItem>

*/
