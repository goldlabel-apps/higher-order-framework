import * as React from "react"
import {
  useAppDispatch,
  useAppSelector,
  setFlash,
  getDisplay,
} from "../listingslab-shared"
import { 
  MovieClip, 
  initFlash, 
  selectFlash,
} from "./"
import {
  Box,
  IconButton,
} from "@mui/material"

export default function Flash(props) {
  const { movieClips, children } = props
  const dispatch = useAppDispatch()
  const flash = useAppSelector(selectFlash)
  
  React.useEffect(() => {
    const { started, display } = flash.data
    if (!display){
      dispatch(setFlash({key: "display", value: getDisplay() }))
      dispatch(setFlash({key: "movieClips", value: movieClips }))
    }
    if (!started){
      dispatch(setFlash({key: "started", value: true }))
      setTimeout(() => {
        initFlash()
      }, 333)
    }
  }, [flash, dispatch])

  const { display } = flash.data
  if (!display) return null  
  const { displayW, displayH } = display
  const stageStyle = {
    border: "1px solid rgba(0,0,0,0.5)",
    background: "rgba(0,0,0,0.023)",
    width: displayW - 4,
    height: displayH - 4,
    overflow: "hidden",
    zIndex: 1,
    postition: "relative",
  }

  return <Box id="stage" sx={ stageStyle }>
            { children }
          </Box>
}
