import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    selectCms,
    setCore,
    setCms,
    Icon,
} from '../../listingslab-shared'
import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    Typography,
    DialogTitle,
    Grid,
    Box,
    IconButton,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'

export default function CMS() {
    const dispatch = useAppDispatch()
    const core = useAppSelector(selectCore)
    const { cmsIsOpen } = core.data
    const cms = useAppSelector(selectCms)
    const { editing } = cms.data
    const { posts } = cms.data
    if (!posts) return null

    const onPostClick = (id: string) => {
        // console.warn("onPostClick", id)
        dispatch(setCms({ key: 'editing', value: id }))
    }

    const cmsClose = () => {
        dispatch(setCore({ key: 'cmsIsOpen', value: false }))
    }

    return (
        <Dialog open={cmsIsOpen} fullScreen onClose={cmsClose}>
            <DialogTitle>
                <Grid container>
                    <Grid item>
                        <IconButton sx={{ mt: 1, mr: 2 }}>
                            <Icon icon="cms" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" sx={{ mt: 1.25 }}>
                            CMS
                        </Typography>
                    </Grid>
                    <Grid item sx={{ flexGrow: 1 }} />
                    <Grid item>
                        <IconButton onClick={cmsClose}>
                            <Icon icon="close" />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>

            <DialogContent>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <List dense>
                            {posts.map((item, i) => {
                                const { id } = item
                                const { title, slug } = item.data
                                return (
                                    <ListItem
                                        key={`post_${i}`}
                                        button
                                        onClick={() => {
                                            onPostClick(id)
                                        }}
                                    >
                                        <ListItemText primary={title} />
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                    {editing ? (
                        <Grid item xs={12} md={8}>
                            editing<pre>{JSON.stringify(editing, null, 2)}</pre>
                        </Grid>
                    ) : null}
                </Grid>
            </DialogContent>

            
        </Dialog>
    )
}

/*
<pre>{ JSON.stringify( posts, null, 2 ) }</pre>

<DialogActions>
                <Button variant="contained" onClick={cmsClose}>
                    Done
                </Button>
            </DialogActions>
*/
