// 153.433123, -28.026887 Goldie
// 14.443941, 35.891377 Malta
// const defaltCenter = [153.433123, -28.026887];
import React, { useRef, useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks'
import { selectFingerprint } from '../features/system'
import mapboxgl from 'mapbox-gl'
import { mapboxConfig } from '../env'
import { Box, Button, Typography } from '@mui/material'
import { Icon } from '../listingslab-shared'
const { accessToken, styleLight } = mapboxConfig
mapboxgl.accessToken = accessToken

export default function Map() {
    const id = 'mapContainer'
    const zoom = 8.75
    const mapContainer = useRef(null)
    const map = useRef(null)

    React.useEffect(() => {
        if (map.current) return
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: styleLight,
            center: [14.443941, 35.891377],
            zoom: zoom,
            interactive: false,
        })
    })

    return (
        <Box
            id={`map_${id}`}
            sx={{
                opacity: 1,
                width: '100%',
            }}
        >
            <Box
                sx={{ height: 300, m: 1 }}
                ref={mapContainer}
                className="map-container"
            />
        </Box>
    )
}
