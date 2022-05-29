import * as React from 'react'
import { Box, TextField } from '@mui/material'

export default function InputPassword(props: any) {
    const { value, onChange } = props

    return (
        <Box
            sx={{
                ml: 0.5,
                mr: 0.5,
                mb: 0,
                mt: 2,
                '& .MuiTextField-root': {},
            }}
        >
            <TextField
                fullWidth
                type="password"
                error={false}
                id="input-password"
                label="Password"
                value={value}
                helperText={null}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
            />
        </Box>
    )
}
