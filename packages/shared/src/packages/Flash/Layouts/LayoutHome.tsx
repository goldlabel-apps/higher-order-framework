import * as React from 'react'
import { Grid } from '@mui/material'
import {
    RouteEngine,
    Work,
    Life,
    Balance,
    Social,
} from '../../../listingslab-shared'
export default function LayoutHome() {
    return (
        <Grid container>
            <Grid item xs={12} sx={{ display: 'flex', mt: 2 }}>
                <Work />
                <Life />
                <Balance />
            </Grid>
            <Grid item sx={{ flexGrow: 1 }} />
            <Grid item xs={12} md={8}>
                <RouteEngine />
            </Grid>
            <Grid item xs={12} md={4} sx={{ mt: 2 }}>
                <Social />
            </Grid>
        </Grid>
    )
}
