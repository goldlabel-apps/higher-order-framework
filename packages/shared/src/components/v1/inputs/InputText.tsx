import * as React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { Box, TextField } from '@mui/material'
// import { Icon } from "../theme";

export interface InputTextShape {
    value?: string
    valid?: boolean
    onChange?: any
}

export default function InputText(props: InputTextShape) {
    const { value, onChange } = props

    return (
        <Box
            sx={{
                m: 1,
                '& .MuiTextField-root': {},
            }}
        >
            <TextField
                autoFocus
                fullWidth
                error={false}
                helperText={null}
                id="input-email"
                label="Email"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
            />
        </Box>
    )
}
