import * as React from 'react'
import {
    useAppSelector,
    selectPingpong,
} from '../listingslab-shared'
import {
    Box,
    Typography,
} from '@mui/material'

export default function Pingpong() {
    const pingpong = useAppSelector(selectPingpong)
    console.warn("pingpong", pingpong)
    
    return (
        <Box sx={{}}>
            <Typography variant="h6" sx={{ fontWeight: "lighter" }}>
                Pingpong 
            </Typography>
        </Box>
    )
}
