import * as React from 'react'
import { Box, Typography } from '@mui/material'

export default function TitleMovie() {
    const title = 'Listingslab'
    const subheader = 'Software'

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{ fontWeight: 'lighter' }}
            >
                {title}
            </Typography>
            <Typography
                variant="h6"
                sx={{ fontWeight: 'lighter' }}
            >
                {subheader}
            </Typography>
        </Box>
    )
}

/*
<Box>
                post<pre>{JSON.stringify(post || null, null, 2)}</pre>
            </Box>
*/
