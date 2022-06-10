import * as React from 'react'
import { Box, Typography } from '@mui/material'

export default function TitleMovie() {
    const title = 'Flash'
    const subheader = 'by listingslab'

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{ fontWeight: 'lighter', textAlign: 'center' }}
            >
                {title}
            </Typography>
            <Typography
                variant="h6"
                sx={{ fontWeight: 'lighter', textAlign: 'center' }}
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
