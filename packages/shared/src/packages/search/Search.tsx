import * as React from 'react'
import { Icon } from '../../listingslab-shared'
import { InputBase, Paper, IconButton } from '@mui/material'

export default function Search() {
    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                background: 'rgba(255,255,255,0.2)',
            }}
        >
            <IconButton
                type="submit"
                onClick={(e) => {
                    e.preventDefault()
                }}
                sx={{ p: '10px' }}
                aria-label="search"
            >
                <Icon icon="search" />
            </IconButton>
            <InputBase
                autoFocus
                onChange={(e) => {
                    e.preventDefault()
                    // console.warn("search", e.target.value)
                }}
                sx={{ ml: 0, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search files' }}
            />
        </Paper>
    )
}

/*
<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <Icon icon="admin" />
      </IconButton>
*/
