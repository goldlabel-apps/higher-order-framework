import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    selectCms,
    setCore,
    setCms,
    Icon,
    Editor,
} from '../../listingslab-shared'
import {
    Dialog,
    DialogContent,
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
    const { cmsDialogOpen, fullScreen, uid } = core.data
    const cms = useAppSelector(selectCms)
    const { editing } = cms.data
    const { posts } = cms.data
    if (!posts) return null

    const closeDialog = () => {
        dispatch(setCore({ key: 'cmsDialogOpen', value: false }))
    }

    return (
        <Dialog 
            fullWidth
            maxWidth="md"
            open={ cmsDialogOpen && uid } 
            fullScreen={ fullScreen } 
            onClose={ closeDialog }
        >

            <DialogTitle>
                <Grid container>
                    <Grid item>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ mt: 2, ml: 2 }}>
                                <Icon icon="cms" />
                            </Box>
                            <Box sx={{ ml:2, mt:1.5}}>
                                <Typography variant="h6" sx={{ fontWeight: "lighter" }}>
                                    Content Management System
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    
                    <Grid item sx={{ flexGrow: 1 }} />
                    <Grid item>
                        <Box sx={{ mt:1 }}>
                            { fullScreen ? <IconButton onClick={()=>{
                                dispatch(setCore({ key: 'fullScreen', value: false }))
                            }}>
                                <Icon icon="exitfullscreen" />
                            </IconButton> : <IconButton onClick={()=>{
                                dispatch(setCore({ key: 'fullScreen', value: true }))
                            }}>
                                <Icon icon="fullscreen" />
                            </IconButton> }

                            <IconButton onClick={closeDialog}>
                                <Icon icon="close" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </DialogTitle>

            <DialogContent>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        left
                    </Grid>
                    {editing ? (
                        <Grid item xs={12} md={8}>
                            <Editor />
                            
                        </Grid>
                    ) : null}
                </Grid>
            </DialogContent>            
        </Dialog>
    )
}











/*
<pre>{ JSON.stringify( posts, null, 2 ) }</pre>
editing<pre>{JSON.stringify(editing, null, 2)}</pre>
<DialogActions>
                <Button variant="contained" onClick={closeDialog}>
                    Done
                </Button>
            </DialogActions>
*/
