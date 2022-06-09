import * as React from 'react';
import {
  MovieClip, 
  Icon,
  useAppDispatch,
  useAppSelector,
  selectFlash,
  // initFlash,
  setFlash,
  getDisplay,
} from '../listingslab-shared'
import {
  Box,
  IconButton,
} from '@mui/material'

export default function Flash(props) {
  const { children } = props
  const dispatch = useAppDispatch()
  const flash = useAppSelector(selectFlash)
  const { display } = flash.data
  React.useEffect(() => {
    const { started, display } = flash.data
    if (!display){
      dispatch(setFlash({key: "display", value: getDisplay() }))
    }
    if (!started){
      setTimeout(() => {
        dispatch(setFlash({key: "started", value: true }))
        // initFlash()
        // 
      }, 333)
    }
  }, [flash, dispatch])
  if (!display) return null  
  const { displayW, displayH } = display
  
  const stageStyle = {
    // border: "1px solid rgba(0,0,0,0.5)",
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



/*

<Box id="text" sx={{
                position: "absolute",
                zIndex:100, 
                width: 350, 
                height: 100,
              }}>

                3l2i3 397h93h4947hd974
              </Box>

{ showPrevNext ? <React.Fragment>
                              <Box id="prev" sx={{ 
                                opacity: 1, 
                                position: "absolute",
                                zIndex:10001, 
                                bottom: 8,
                                left: 8,
                                width: 50, 
                                height: 50,
                              }}>
                                <IconButton color="primary" size="large" >
                                  <Icon icon="arrowl" />
                                </IconButton>
                              </Box>
                              <Box id="next" sx={{ 
                                opacity: 1, 
                                position: "absolute",
                                zIndex:10002, 
                                bottom: 8,
                                right: 8,
                                width: 50, 
                                height: 50,
                              }}>
                                <IconButton color="primary" size="large">
                                  <Icon icon="arrowr" />
                                </IconButton>
                              </Box>
                            </React.Fragment> : null }
*/