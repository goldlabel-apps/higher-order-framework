import * as React from 'react'
import { Box, AppBar, Grid } from '@mui/material'
import { RouteEngine, AppMenu, Search } from '../../../listingslab-shared'
export default function LayoutHome() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{}}>
                        <AppMenu />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={8} sx={{ mt: 6 }}>
                <RouteEngine />
            </Grid>
            <Grid item xs={12} md={4} sx={{ mt: 6 }}>
                <Search />
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
