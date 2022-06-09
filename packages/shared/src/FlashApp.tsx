import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {    
    Flash,
    MovieClip,
} from './listingslab-shared'

export default function FlashApp() {
    return <Flash>
                <MovieClip data={{
                    width: 200,
                }}>
                    MovieClip
                </MovieClip>
            </Flash>
}
