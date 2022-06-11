import * as React from 'react'
import { Button } from '@mui/material'
import { useAppDispatch, navClick, Icon } from '../listingslab-shared'
export default function MaxiButton(props: any) {
    const { data } = props
    const dispatch = useAppDispatch()
    let icon = null
    let label = null
    let variant = 'text'
    if (data.icon) icon = data.icon
    if (data.label) label = data.label
    if (data.variant) variant = data.variant

    let onClick = () => {
        dispatch(navClick(data))
    }

    return (
        <Button
            // @ts-ignore
            variant={variant}
            onClick={onClick}
        >
            {icon ? <Icon icon={icon} /> : null}
            {label ? (
                <span
                    style={{
                        marginRight: 4,
                        marginLeft: 4,
                        textTransform: 'none',
                    }}
                >
                    {label}
                </span>
            ) : (
                <span style={{}}>{label}</span>
            )}
        </Button>
    )
}
