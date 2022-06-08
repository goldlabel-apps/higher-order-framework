import * as React from 'react'
import { Typography, CardMedia } from '@mui/material'

export default function Landing() {
    const title = 'Listingslab Software'
    const imageSrc = 'https://listingslab.com/svg/featured/work.svg'

    return (
        <React.Fragment>
            <Typography
                gutterBottom
                variant="h6"
                sx={{ fontWeight: 'lighter', textAlign: 'center' }}
            >
                {title}
            </Typography>
            <CardMedia
                sx={{ mt: 4 }}
                component="img"
                height="175"
                image={imageSrc}
                alt={title}
            />
        </React.Fragment>
    )
}
