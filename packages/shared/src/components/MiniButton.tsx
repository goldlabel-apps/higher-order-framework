import * as React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import { useAppDispatch, navClick, Icon } from '../listingslab-shared'

export default function MiniButton(props: any) {
    const { data } = props
    const dispatch = useAppDispatch()
    let icon = null
    let tooltip = null
    let color = 'primary'
    let variant = 'text'
    let action = 'onEvent'

    if (data.icon) icon = data.icon
    if (data.color) color = data.color
    if (data.tooltip) tooltip = data.tooltip
    if (data.variant) variant = data.variant
    if (data.action) action = data.action

    let onClick = () => {
        dispatch(navClick(data))
    }
    if (data.onClick) onClick = data.onClick

    return (
        <Tooltip title={tooltip} color={color}>
            <IconButton onClick={onClick}>
                <Icon icon={icon} />
            </IconButton>
        </Tooltip>
    )
}
