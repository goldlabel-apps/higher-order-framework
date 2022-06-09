import * as React from 'react'
import {
  useAppSelector,
  selectFlash,
} from '../listingslab-shared'

import { getNextHighestDepth } from "./"

import {
  Box,
} from '@mui/material'

export default function MovieClip(props: any) {

  const { children, data } = props
  // const flash = useAppSelector(selectFlash)
  let mcId = "mc_"
  let mcWidth = 0
  let mcHeight = 0
  let mcDepth = null

  if (data.id) mcId = data.id
  if (data.width) mcWidth = data.width
  if (data.height) mcHeight = data.height 
  if (data.depth) mcDepth = data.depth
  if (!mcDepth) mcDepth = getNextHighestDepth()

  const movieclipStyle = {
    border: "1px solid gold",
    background: "rgba(255,255,255,1)",
    width: mcWidth,
    height: mcHeight,
    zIndex: mcDepth,

  }  

  return <Box id={ mcId } sx={ movieclipStyle }>
            { children }
          </Box>
}

/*

export interface MovieClipShape {
    divId: string
    zIndex: number
}
*/