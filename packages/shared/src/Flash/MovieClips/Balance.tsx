import * as React from 'react'
import { Punk } from "../../listingslab-shared"
import { ButtonBase, Typography, CardMedia } from '@mui/material'

export default function Balance() {

    return (
            <ButtonBase sx={{ display: "flex", width: 290 }}>
                <CardMedia
                    component={Punk}
                    height="120"        
                />
                <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: 'lighter', ml: 2 }}
                >
                    Balance
                </Typography>
            </ButtonBase>
    )
}
