import * as React from 'react'
import { Grid} from '@mui/material'
import { 
    RouteEngine,
    Work, Life, Balance,
} from "../../../listingslab-shared"
export default function LayoutHome() {

    return (
        <Grid container>
            <Grid item sx={{ display: "flex"}}>
                <Work />
                <Life />
                <Balance />
            </Grid>
            <Grid item sx={{flexGrow: 1}} />
            <Grid sx={{ border: "1px solid limegreen", }}>
                <RouteEngine />
            </Grid>
            
        </Grid>
    )
}
