import * as React from 'react'
import { useAppDispatch, navClick, Punk } from "../../listingslab-shared"
import { Box, ButtonBase, Typography, CardMedia } from '@mui/material'

export default function Balance() {
    const dispatch = useAppDispatch()

    let onClick = () => {
        dispatch(navClick({action: "onBalanceClick"}))
    }
    return (
        <ButtonBase 
            onClick={ onClick }
            sx={{ 
                // border: "1px solid blue",
                margin: "left",
                display: "flex", width: 200 }}
            >
                <CardMedia
                    component={Punk}
                    height="100"        
                />
                <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 'lighter', ml: 4 }}
                >
                    Balance
                </Typography>
                <Box sx={{flexGrow:1}} />
            </ButtonBase>
    )
}
