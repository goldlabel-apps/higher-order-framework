import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { useAppSelector, selectCms } from '../listingslab-shared'

export default function Landing() {
    const cms = useAppSelector(selectCms)
    let title = 'What title shall we show?'


    React.useEffect(() => {
        console.warn("render title", title)
    }, [title])

    return (
        <React.Fragment>
            <Box>
                <Typography
                    variant="h6"
                    sx={{ fontWeight: "lighter" }}>
                    { title }
                </Typography>
            </Box>
            <pre>{JSON.stringify(cms, null, 2)}</pre>
        </React.Fragment>
    )
}

/*
<pre>{JSON.stringify(content, null, 2)}</pre>
*/
