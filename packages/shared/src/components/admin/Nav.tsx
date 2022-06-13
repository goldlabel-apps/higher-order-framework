import * as React from "react"
import {
    useAppSelector,
    useAppDispatch,
    selectCms,
    setCms,
    Icon,
} from "../../listingslab-shared"
import { 
    List, 
    ListItem, 
    ListItemText, 
    Card, 
    ListItemIcon,
    Typography,
} from "@mui/material"

export default function Nav() {
    const dispatch = useAppDispatch()
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    

    const onCollectionClick = (collection: string) => {
        dispatch(setCms({ key: "collection", value: collection }))
        return true
    }

    return (
        <Card sx={{ m: 2, p: 1 }}>

            <Typography variant="body2" color="secondary" sx={{ mb: 2 }}>
                Firestore collections
            </Typography>


            <List dense>
                <ListItem
                    disabled={ collection === "posts" }
                    button
                    onClick={() => {
                        onCollectionClick("posts")
                    }}>
                    <ListItemIcon color="secondary">
                        <Icon icon="doc" />
                    </ListItemIcon>
                    <ListItemText primary="posts" />
                </ListItem>
                
                <ListItem
                    button
                    disabled={ collection === "cms" }
                    onClick={() => {
                        onCollectionClick("cms")
                    }}>
                    <ListItemIcon color="secondary">
                        <Icon icon="firestore" />
                    </ListItemIcon>
                    <ListItemText primary="cms" />
                </ListItem>
                
                <ListItem
                    button
                    disabled={ collection === "links" }
                    onClick={() => {
                        onCollectionClick("links")
                    }}>
                    <ListItemIcon color="secondary">
                        <Icon icon="link" />
                    </ListItemIcon>
                    <ListItemText primary="links" />
                </ListItem>
                
                <ListItem
                    button
                    disabled={ collection === "siteinfo" }
                    onClick={() => {
                        onCollectionClick("siteinfo")
                    }}>
                    <ListItemIcon color="secondary">
                        <Icon icon="admin" />
                    </ListItemIcon>
                    <ListItemText primary="siteinfo" />
                </ListItem>
            </List>
        </Card>
    )
}
