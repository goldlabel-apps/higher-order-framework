import * as React from 'react'
import { useAppDispatch, navClick, Biker } from '../../listingslab-shared'
import { Box, ButtonBase, Typography, CardMedia } from '@mui/material'

export default function Work() {
    const dispatch = useAppDispatch()

    let onClick = () => {
        dispatch(navClick({ action: 'onWorkClick' }))
    }

    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                margin: 'left',
                display: 'flex',
                width: 200,
            }}
        >
            <CardMedia component={Biker} height="100" />
            <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: 'lighter', ml: 4 }}
            >
                Work
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
        </ButtonBase>
    )
}
