import * as React from 'react'
import { Box, Grid } from '@mui/material'
import {
    getDisplay,
    RouteEngine,
    Social,
    SVGImageBtn,
} from '../../../listingslab-shared'
export default function LayoutHome() {
    let pushLeftDown = 0
    const display = getDisplay()
    if (!display) return null
    const { isMobile } = display
    if (!isMobile) {
        pushLeftDown = 65
    }
    return (
        <Grid container>
            <Grid item xs={12} md={8}>
                <RouteEngine />
            </Grid>

            <Grid item xs={12} md={4} sx={{ mt: 2 }}>
                
                <SVGImageBtn buttonAttributes={{
                    label: "diosahodihos9", 
                    onClick: (payload: any) => {
                        console.warn("onclick", payload)
                    },

                }}/>

                <Social />
            </Grid>
        </Grid>
    )
}
/*

<Grid item sx={{ flexGrow: 1 }} />
<Grid item xs={12} sx={{ display: 'flex', mt: 2 }}>
                

            </Grid>
*/
