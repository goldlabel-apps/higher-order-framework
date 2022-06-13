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
} from '../../listingslab-shared'
import {
    useTheme,
    useMediaQuery,
    Dialog,
    Grid,
    Box,
    IconButton,
} from '@mui/material'

export default function CMS() {
    const dispatch = useAppDispatch()
    const core = useAppSelector(selectCore)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    const { cmsDialogOpen, fullScreen, uid } = core.data
    const cms = useAppSelector(selectCms)
    const { collection } = cms.data
    let rightCol = false
    if (collection) rightCol = true
    const closeDialog = () => dispatch(setCore({ key: 'cmsDialogOpen', value: false }))

    return (
        <Dialog
            fullWidth
            maxWidth="md"
            open={cmsDialogOpen && uid}
            fullScreen={fullScreen}
            onClose={ closeDialog }>
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
                    { !isMobile ? null : null }
                   
                    <Grid item xs={12} md={rightCol ? 3 : 12}>
                        <Nav />
                    </Grid>

                    {rightCol ? (
                        <Grid item xs={12} md={9}>
                            <Box sx={{ border: "1px solid red" }}>
                                <Collection />
                            </Box>
                        </Grid>
                    ) : null}
                </Grid>
                
        </Dialog>
    )
}
