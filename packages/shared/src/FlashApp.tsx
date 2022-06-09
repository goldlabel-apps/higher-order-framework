import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {    
    Flash,
    MovieClip,
    getNextHighestDepth,
} from './listingslab-shared'

import { Mumma } from "./Flash"

export default function FlashApp() {

    const depth = getNextHighestDepth()

    return <Flash>
                <MovieClip data={{
                    width: 100,
                    height: 200,
                    zIndex: depth,
                }}>
                    <Mumma />
                </MovieClip>
            </Flash>
}

/*

*/