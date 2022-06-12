import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCms,
    setCms,
    Icon,
} from '../../listingslab-shared'
import { List, ListItem, ListItemText, Card, ListItemIcon, Divider } from '@mui/material'

export default function Nav() {
    const dispatch = useAppDispatch()

    const onCollectionClick = (collection: string) => {
        dispatch(setCms({ key: 'collection', value: collection }))
        return true
    }

    return (
        <Card sx={{ m: 1, p: 1, boxShadow: 'none' }}>
            <List dense>
                <Divider />
                <ListItem
                    button
                    onClick={() => {
                        onCollectionClick('posts')
                    }}
                >
                    <ListItemIcon color="secondary">
                        <Icon icon="doc" />
                    </ListItemIcon>
                    <ListItemText primary="posts" />
                </ListItem>
                <Divider />
                <ListItem
                    button
                    onClick={() => {
                        onCollectionClick('cms')
                    }}
                >
                    <ListItemIcon color="secondary">
                        <Icon icon="firestore" />
                    </ListItemIcon>
                    <ListItemText primary="cms" />
                </ListItem>
                <Divider />
                <ListItem
                    button
                    onClick={() => {
                        onCollectionClick('links')
                    }}
                >
                    <ListItemIcon color="secondary">
                        <Icon icon="link" />
                    </ListItemIcon>
                    <ListItemText primary="links" />
                </ListItem>
                <Divider />
                <ListItem
                    button
                    onClick={() => {
                        onCollectionClick('siteinfo')
                    }}
                >
                    <ListItemIcon color="secondary">
                        <Icon icon="admin" />
                    </ListItemIcon>
                    <ListItemText primary="siteinfo" />
                </ListItem>
                <Divider />
            </List>
        </Card>
    )
}

/*

let navTitle = "Firestore collections"
<Typography variant="body2" sx={{ mb: 2 }}>
                    { navTitle }
                </Typography>
*/
