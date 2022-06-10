import * as React from 'react'
import { Mumma, Pingpongball, Macromedia } from './'
import { getNextHighestDepth } from './'
import { Navigator, TitleMovie } from '../listingslab-shared'
import { Box } from '@mui/material'

const getComponent = (component) => {
    switch (component) {
        case 'TitleMovie':
            return <TitleMovie />
            break
        case 'Macromedia':
            return <Macromedia />
            break
        case 'Mumma':
            return <Mumma />
            break
        case 'Pingpongball':
            return <Pingpongball />
            break
        case 'Navigator':
            return <Navigator />
            break
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
    if (data.id) mcId = data.id
    if (data.width) mcWidth = data.width
    if (data.height) mcHeight = data.height
    if (data.depth) mcDepth = data.depth
    if (!mcDepth) mcDepth = getNextHighestDepth()

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
            {getComponent(component)}
        </Box>
    )
}
