import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {    
    Flash,
    Navigator,
} from './listingslab-shared'

export default function FlashApp() {
    return <Flash>
                <Box 
                    id="navigator" 
                    sx={{border:"1px solid green"}}>
                    <Navigator />
                </Box>
            </Flash>
}
