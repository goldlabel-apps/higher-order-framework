import * as React from 'react'
import { Grid } from '@mui/material'
import { Work, Life, Balance } from '../../../listingslab-shared'
export default function MonsterNav() {
    return (
        <Grid container sx={{}}>
            <Grid item xs={12} sx={{ display: 'flex' }}>
                <Work />
                <Life />
                <Balance />
            </Grid>
        </Grid>
    )
}
