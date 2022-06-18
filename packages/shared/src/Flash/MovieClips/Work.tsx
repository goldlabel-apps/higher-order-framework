import * as React from 'react'
import { useAppDispatch, navClick, Biker } from "../../listingslab-shared"
import { ButtonBase, Typography, CardMedia } from '@mui/material'

export default function Work() {
    const dispatch = useAppDispatch()

    let onClick = () => {
        dispatch(navClick({action: "onWorkClick"}))
    }

    return (
            <ButtonBase 
                onClick={ onClick }
                sx={{ display: "flex", width: 290 }}>
                <CardMedia
                    component={Biker}
                    height="120"        
                />
                <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 'lighter', ml: 2 }}
                >
                    Work
                </Typography>
            </ButtonBase>
    )
}
