import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    selectCms,
    setCore,
    Icon,
    Nav,
    Collection,
    FullScreenToggle,
    setCms,
} from '../../listingslab-shared'
import {
    useTheme,
    useMediaQuery,
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    Box,
    IconButton,
    Typography,
} from '@mui/material'

export default function CMS() {
    const dispatch = useAppDispatch()
    const core = useAppSelector(selectCore)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const { cmsDialogOpen, fullScreen, uid } = core.data
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data

    let leftCol = true
    let rightCol = false
    if (collection) {
        rightCol = true
        leftCol = false
    }

    let cmsTitle = "Manage collections on Firebase Cloud"
    if (collection) cmsTitle = `Managing ${collection}`

    const closeDialog = () => dispatch(setCore({ key: 'cmsDialogOpen', value: false }))

    const onBackClick = () => {
        dispatch(setCms({ key: 'collection', value: null }))
    }

    return (
        <Dialog
            fullWidth
            maxWidth="md"
            open={cmsDialogOpen && uid}
            fullScreen={fullScreen}
            onClose={ closeDialog }>

            <DialogContent>
                
                <Grid container>
                    <Grid item sx={{ flexGrow: 1 }} />
                    <Grid item>
                        <Box sx={{ mt: 1, mr: 1 }}>
                            <FullScreenToggle /> 
                            <IconButton onClick={closeDialog}>
                                <Icon icon="close" />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                
                <Grid container>

                    <Grid item xs={ 12 }>
                        <Typography variant="h6" color="primary" 
                            sx={{ fontWeight: "lighter", ml: 2 }}>
                            { cmsTitle }
                        </Typography>
                    </Grid>

                    { leftCol ? <Grid item xs={12} md={rightCol ? 3 : 12}>
                        <Nav />
                    </Grid> : null }
                    
                    { rightCol ? (
                        <Grid item xs={ 12 } md={ leftCol ? 9 : 12 }>
                            <Collection />
                        </Grid>
                    ) : null}
                </Grid>
            </DialogContent>
            
            <DialogActions>
                
            </DialogActions>
        </Dialog>
    )
}

/*
<Button
                    variant="contained"
                    color="secondary"
                    onClick={ onBackClick }
                >
                    Back
                </Button>
*/