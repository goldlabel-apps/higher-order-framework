import * as React from 'react'
import { useTheme, Button } from '@mui/material'
import { Icon } from '../theme'

export default function MaxiButton(props: any) {
    const { data } = props
    let icon = null
    let label = null
    let variant = 'text'
    let action = 'onEvent'

    if (data.icon) icon = data.icon
    if (data.label) label = data.label
    if (data.variant) variant = data.variant
    if (data.action) action = data.action

    let onClick = () => { 
        console.warn('dipatch', action) 
    }

    return (
        <Button
            // @ts-ignore
            variant={variant}   
            onClick={onClick}
        >
            {icon ? <Icon icon={icon} /> : null}
            {label ? (
                <span style={{ marginRight: 8, marginLeft: 8 }}>{label}</span>
            ) : (
                <span style={{}}>{label}</span>
            )}
        </Button>
    )
}
