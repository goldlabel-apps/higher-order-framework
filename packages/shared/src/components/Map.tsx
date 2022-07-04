// 153.433123, -28.026887 Goldie
// 14.443941, 35.891377 Malta
// const defaltCenter = [153.433123, -28.026887];
import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { mapboxConfig } from '../env'
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material'

import { Icon } from '../listingslab-shared'
const { accessToken, styleLight } = mapboxConfig
mapboxgl.accessToken = accessToken

export default function Map() {
    const id = 'mapContainer'
    const zoom = 8.75
    const mapContainer = useRef(null)
    const map = useRef(null)
    const defaultExpanded = false

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
        <Accordion sx={{ boxShadow: 'none' }} defaultExpanded={defaultExpanded}>
            <AccordionSummary
                id="socialAccordion"
                expandIcon={<Icon icon="acc" />}
            >
                <Typography variant="body1" sx={{}}>
                    On the map
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    id={`map_${id}`}
                    sx={{
                        opacity: 1,
                        width: '100%',
                    }}
                >
                    <Box
                        sx={{ height: 200, m: 1 }}
                        ref={mapContainer}
                        className="map-container"
                    />
                </Box>
            </AccordionDetails>
        </Accordion>
    )
}
