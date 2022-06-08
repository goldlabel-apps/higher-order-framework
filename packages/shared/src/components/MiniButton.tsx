import * as React from 'react'
// import { useAppSelector } from "../app/hooks";
import { IconButton, Box, Tooltip, Badge } from '@mui/material'
import { Icon } from '../theme'

export default function MiniButton(props: any) {
    const { data } = props
    const { icon, color, tooltip } = data

    return (
        <Tooltip title={tooltip} color={color}>
            <IconButton 
                sx={{ m: 1 }}
                size="large"
                color={color}
            >
                    <Icon icon={icon} />
            </IconButton>
        </Tooltip>
    )
}
