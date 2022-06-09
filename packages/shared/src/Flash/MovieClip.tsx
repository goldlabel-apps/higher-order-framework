import * as React from 'react';
import {
  Box,
} from '@mui/material'

export default function MovieClip(props: any) {

  let id = "mc_"
  
  let mcWidth = 150
  let mcHeight = 150
  const { width } = props.data

  const movieclipStyle = {
    border: "1px solid red",
    width: mcWidth,
    height: mcHeight,
  }  
  return <Box id={id} sx={ movieclipStyle }>
            This is a MovieClip called {id}
          </Box>
}

/*
export interface MovieClipShape {
    divId: string
    zIndex: number
}
*/