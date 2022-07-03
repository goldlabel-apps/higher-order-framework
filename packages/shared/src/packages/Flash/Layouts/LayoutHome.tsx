import * as React from 'react'
import { Box, Grid } from '@mui/material'
import {
    getDisplay,
    RouteEngine,
    Social,
    SVGImageBtn,
    Map,
    Cannatown,
    AppMenu,
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
                <AppMenu />

                <Box sx={{ m: 1.5 }}>
                    <SVGImageBtn
                        buttonAttributes={{
                            slug: '',
                            type: 'route',
                            route: '/',
                            label: 'Home',
                        }}
                    />

                    <SVGImageBtn
                        buttonAttributes={{
                            slug: 'work',
                            type: 'route',
                            route: '/work',
                            label: 'Work',
                        }}
                    />

                    <SVGImageBtn
                        buttonAttributes={{
                            slug: 'life',
                            type: 'route',
                            route: '/life',
                            label: 'Life',
                        }}
                    />

                    <SVGImageBtn
                        buttonAttributes={{
                            slug: 'balance',
                            type: 'route',
                            route: '/balance',
                            label: 'Balance',
                        }}
                    />
                </Box>

                <Social />

                <Map />
            </Grid>
        </Grid>
    )
}
/*

<Grid item sx={{ flexGrow: 1 }} />
<Grid item xs={12} sx={{ display: 'flex', mt: 2 }}>
                

            </Grid>

imageSrc:
                            'https://listingslab.com/svg/featured/work.svg',
            */
