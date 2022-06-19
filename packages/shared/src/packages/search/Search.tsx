import * as React from 'react'

import {
  Icon,
  AppMenu,
} from '../../listingslab-shared'

import { 
  Paper,
  InputBase,
  Divider,
  IconButton,
 } from '@mui/material'

export default function Search() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
    >
      <AppMenu />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search files' }}
      />
      <IconButton 
        type="submit" 
        sx={{ p: '10px' }} 
        aria-label="search">
        <Icon icon="search" />
      </IconButton>
      
    </Paper>
  )
}

/*
<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <Icon icon="admin" />
      </IconButton>
*/