import * as React from 'react'
import { useAppDispatch, navClick, Biker } from '../../../listingslab-shared'

import { Box, ButtonBase, Typography, CardMedia } from '@mui/material'

export interface ButtonAttributesShape {
    type: string
    url: string
    route: string
    target: string
    label: string
    imageSrc: string
}

export default function SVGImageBtn(props: any) {
    const dispatch = useAppDispatch()
    const { buttonAttributes } = props

    if (!buttonAttributes) return null
    // console.warn ("buttonAttributes", buttonAttributes )

    let theLabel = "Label"
    const {
        label
    } = buttonAttributes
    if (label) theLabel = label

    let onClick = () => {
        dispatch(navClick({ action: 'onWorkClick' }))
    }

    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                background: "rgba(0,0,0,0.1)",
                margin: 'left',
                display: 'flex',
                flexDirection: 'column',
                width: 200,
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant='h6' sx={{ m:1, fontWeight: "lighter"}}>
                    { theLabel }
                </Typography>
            </Box>

            <Box sx={{}}>
                <CardMedia component={ Biker } width="200" height="50" />
            </Box>
        </ButtonBase>
    )
}
