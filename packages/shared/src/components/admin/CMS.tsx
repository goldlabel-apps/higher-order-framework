import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    selectCms,
    setCore,
    Icon,
    Nav,
    ListItems,
} from '../../listingslab-shared'
import {
    Dialog,
    DialogContent,
    Typography,
    DialogTitle,
    Grid,
    Box,
    IconButton,
} from '@mui/material'

export default function CMS() {
    const dispatch = useAppDispatch()
    const core = useAppSelector(selectCore)
    const { cmsDialogOpen, fullScreen, uid } = core.data
    const cms = useAppSelector(selectCms)
    const { posts, collection } = cms.data
    if (!posts) return null

    const closeDialog = () => {
        dispatch(setCore({ key: 'cmsDialogOpen', value: false }))
    }

    let dialogTitle = "CMS"
    if (collection){
        dialogTitle = collection
    }

    const rightCol = false

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
                            
                            <Box sx={{ ml:2, mt:1.5}}>
                                <Typography variant="h6" sx={{ fontWeight: "lighter" }}>
                                    { dialogTitle }
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
                    <Grid item xs={12} md={ rightCol ? 4 : 12 }>
                        <Nav />
                    </Grid>
                    { rightCol ? <Grid item xs={12} md={ 8 }>
                        <ListItems />
                    </Grid> : null }
                    
                </Grid>
            </DialogContent>            
        </Dialog>
    )
}
