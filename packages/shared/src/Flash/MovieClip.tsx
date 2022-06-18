import * as React from 'react'
import { Mumma, Pingpongball, Macromedia } from './'
import {
    Navigator,
    RouteEngine,
    AppMenu,
    Social,
    Pingpong,
    Work,
    Life,
    Balance,
} from '../listingslab-shared'
import { Box } from '@mui/material'

const getComponent = (component) => {
    switch (component) {
        case 'AppMenu':
            return <AppMenu />

        case 'Work':
            return <Work />

        case 'Life':
            return <Life />

        case 'Balance':
            return <Balance />

        case 'Pingpong':
            return <Pingpong />

        case 'Social':
            return <Social />

        case 'RouteEngine':
            return <RouteEngine />

        case 'Macromedia':
            return <Macromedia />

        case 'Mumma':
            return <Mumma />

        case 'Pingpongball':
            return <Pingpongball />

        case 'Navigator':
            return <Navigator />

        default:
            return null
    }
}

export default function MovieClip(props: any) {
    const { data } = props
    let mcId = 'mc_'
    let mcWidth = 0
    let mcHeight = 0
    let mcDepth = null
    let border = null
    if (data.id) mcId = data.id
    if (data.width) mcWidth = data.width
    if (data.height) mcHeight = data.height
    if (data.depth) mcDepth = data.depth
    if (data.border) border = data.border
    if (!mcDepth) mcDepth = 1234

    const movieclipStyle = {
        // border: "1px solid green",
        //  background: "rgba(255,255,255,1)",
        width: mcWidth,
        height: mcHeight,
        zIndex: mcDepth,
        position: 'absolute',
        opacity: 0,
        scale: 0.5,
    }

    const { component } = data
    
    return (
        <Box id={mcId} sx={movieclipStyle}>
            <Box sx={{ border }}>
            {getComponent(component)}
            </Box>
        </Box>
    )
}
