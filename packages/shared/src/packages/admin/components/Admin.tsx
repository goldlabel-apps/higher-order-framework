import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    selectAdmin,
    setCore,
    Icon,
    Collections,
    Collection,
    FullScreenToggle,
    setAdmin,
    PingpongAdmin,
} from '../../../listingslab-shared'
import {
    useTheme,
    useMediaQuery,
    Dialog,
    DialogContent,
    Grid,
    Box,
    Button,
    IconButton,
    Typography,
} from '@mui/material'

export default function Admin() {
    const dispatch = useAppDispatch()
    const core = useAppSelector(selectCore)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const { cmsDialogOpen, fullScreen, uid } = core.data
    let isFullScreen = false
    if (fullScreen) isFullScreen = true
    if (isMobile) isFullScreen = true
    const cms = useAppSelector(selectAdmin)
    const { collection } = cms.data
    let leftCol = true
    let rightCol = false
    if (collection) {
        rightCol = true
        leftCol = false
    }

    const closeDialog = () =>
        dispatch(setCore({ key: 'cmsDialogOpen', value: false }))

    const onCollectionClick = () => {
        dispatch(setAdmin({ key: 'mode', value: 'read' }))
        dispatch(setAdmin({ key: 'collection', value: null }))
        dispatch(setAdmin({ key: 'selected', value: null }))
        return true
    }

    // const onReadClick = () => {
    //     dispatch(setAdmin({ key: 'mode', value: 'read' }))
    //     dispatch(setAdmin({ key: 'selected', value: null }))
    //     return true
    // }

    const onCreateClick = () => {
        dispatch(setAdmin({ key: 'mode', value: 'create' }))
        return true
    }

    return (
        <Dialog
            fullWidth
            maxWidth="md"
            open={cmsDialogOpen && uid}
            fullScreen={isFullScreen}
            onClose={closeDialog}
        >
            <DialogContent>
                <Grid container>
                    {collection ? (
                        <Grid item>
                            <Box sx={{}}>
                                <IconButton
                                    color="secondary"
                                    onClick={onCollectionClick}
                                >
                                    <Icon icon={'arrowl'} />
                                </IconButton>

                                <Typography variant="button">
                                    {collection}
                                </Typography>

                                <IconButton
                                    color="secondary"
                                    onClick={onCreateClick}
                                >
                                    <Icon icon={'new'} />
                                </IconButton>
                                <Typography variant="button">
                                    New {collection.slice(0, -1)}
                                </Typography>
                            </Box>
                        </Grid>
                    ) : null}

                    <Grid item sx={{ flexGrow: 1 }} />
                    <Grid item>
                        <Box sx={{ mt: 1, mr: 1 }}>
                            <FullScreenToggle />
                            <IconButton color="secondary" onClick={closeDialog}>
                                <Icon icon="close" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    {leftCol ? (
                        <Grid item xs={12} md={rightCol ? 3 : 12}>
                            <Collections />
                        </Grid>
                    ) : null}
                    {rightCol ? (
                        <Grid item xs={12} md={leftCol ? 9 : 12}>
                            <Collection />
                        </Grid>
                    ) : null}
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

/*
<DialogActions></DialogActions>
<Button
                    variant="contained"
                    color="secondary"
                    
                >
                    Back
                </Button>



                <Box sx={{}}>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    sx={{ fontWeight: 'lighter', ml: 2 }}
                                >
                                    {cmsTitle}
                                </Typography>
                            </Box>

                            

// if (posts) {
    //     for (let i = 0; i < posts.length; i++) {
    //         if (posts[i].id === '_shape') {
    //             // dispatch(setAdmin({ key:"shape", value: posts[i].data}))
    //         }
    //     }
    // }                
    

<Button
                                    color="secondary"
                                    onClick={onReadClick}
                                >
                                    <Icon icon={'arrowl'} />
                                    <span
                                        style={{
                                            marginRight: 4,
                                            marginLeft: 4,
                                        }}
                                    >
                                        {collection}
                                    </span>
                                </Button>

    */
