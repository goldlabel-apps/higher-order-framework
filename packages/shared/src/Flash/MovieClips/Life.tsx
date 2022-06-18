import * as React from 'react'
import { useAppDispatch, navClick, Chix } from '../../listingslab-shared'
import { Box, ButtonBase, Typography, CardMedia } from '@mui/material'

export default function Life() {
    const dispatch = useAppDispatch()

    let onClick = () => {
        dispatch(navClick({ action: 'onLifeClick' }))
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
            <CardMedia component={Chix} height="100" />
            <Typography
                variant="h6"
                color="primary"
                sx={{ fontWeight: 'lighter', ml: 4 }}
            >
                Life
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
        </ButtonBase>
    )
}
