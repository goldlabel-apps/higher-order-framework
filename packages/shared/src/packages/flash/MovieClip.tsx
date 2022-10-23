import * as React from 'react'
import { getComponent } from '../../listingslab-shared'
import { Box } from '@mui/material'

export default function MovieClip(props: any) {
    const { data } = props
    let mcId = 'mc_'
    let mcWidth = 0
    let mcHeight = 0
    let mcDepth = 0
    let border = null
    if (data.id) mcId = data.id
    if (data.width) mcWidth = data.width
    if (data.height) mcHeight = data.height
    if (data.depth) mcDepth = data.depth
    if (data.border) border = data.border
    if (!mcDepth) mcDepth = 1

    const movieclipStyle = {
        // border: "1px solid green",
        // background: "rgba(255,255,255,1)",
        width: mcWidth,
        height: mcHeight,
        minHeight: 150,
        zIndex: mcDepth,
        position: 'absolute',
        opacity: 0,
        scale: 0.5,
    }

    const { component } = data

    return (
        <Box id={mcId} sx={movieclipStyle}>
            <Box sx={{ border }}>{getComponent(component)}</Box>
        </Box>
    )
}
