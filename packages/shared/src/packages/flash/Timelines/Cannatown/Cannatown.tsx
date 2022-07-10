import * as React from 'react'
import {
    useAppDispatch,
    useAppSelector,
    // setFlash,
    startCannatown,
    selectFlash,
    Mumma,
} from '../../../../listingslab-shared'
import { Box } from '@mui/material'

export default function Cannatown(props:any) {
    const dispatch = useAppDispatch()
    const flash = useAppSelector(selectFlash)

    React.useEffect(() => {
        const { cannatown } = flash.data
        const { started, finished } = cannatown
        if (!started && !finished) startCannatown()
    }, [flash, dispatch])

    let dimensions = {
        width: 500,
        height: 200,
    }

    const cannatownStyle = {
        ...dimensions,
        // border: '1px solid rgba(0,0,0,1)',
        // background: 'rgba(0,0,0,0.1)',
        overflow: 'hidden',
        postition: 'relative',
    }

    return (
        <Box id="cannatown-stage" style={cannatownStyle}>
            <Box
                id="mumma"
                sx={{
                    position: 'relative',
                    opacity: 0,
                    width: 60,
                }}
            >
                <Mumma />
            </Box>
        </Box>
    )
}

/*
dispatch(setFlash({key: "cannatown", value:{
            started: true,
            finished: false,
        }}))
*/
