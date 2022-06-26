import * as React from 'react'
import { Box, Grid } from '@mui/material'
import { 
    getDisplay,
    RouteEngine, 
    AppMenu, 
    Search,
} from '../../../listingslab-shared'
export default function LayoutHome() {

    let pushLeftDown = 0
    const display = getDisplay()
    if (!display) return null
    const { isMobile } = display
    if(!isMobile){
        pushLeftDown = 65
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flexGrow: 1 }} />
                    <AppMenu />
                </Box>
            </Grid>
            <Grid item xs={12} md={4}>
                <div style={{ height: pushLeftDown }} />
                <Search />
            </Grid>
            <Grid item xs={12} md={8} sx={{}}>
                <RouteEngine />
            </Grid>
        </Grid>
    )
}
/*

<Grid item sx={{ flexGrow: 1 }} />
<Grid item xs={12} sx={{ display: 'flex', mt: 2 }}>
                <Work />
                <Life />
                <Balance />
            </Grid>
*/
