import * as React from 'react'
import { useTheme, Button } from '@mui/material'
import { Icon } from '../theme'

export default function MaxiButton(props: any) {
    const { data } = props
    let icon = null
    let label = null
    let variant = 'text'

    if (data.icon) icon = data.icon
    if (data.label) label = data.label
    if (data.variant) variant = data.variant

    let onClick = (e) => {
        e.preventDefault()
        console.warn('MaxiButton onClick')
    }
    if (data.onClick) onClick = data.onClick

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
