import * as React from 'react'
import {
    useAppSelector,
    useAppDispatch,
    selectPingpong,
    setPingpong,
    pingpongInit,
} from '../listingslab-shared'
import { Box, Typography } from '@mui/material'

export default function Pingpong() {
    const dispatch = useAppDispatch()
    const pingpong = useAppSelector(selectPingpong)
    // console.warn("pingpong", pingpong)

    React.useEffect(() => {
        const { status } = pingpong
        if (status === 'notstarted') {
            dispatch(pingpongInit())
            dispatch(setPingpong({ key: 'status', value: 'innitting' }))
        }
    }, [pingpong, dispatch])
    // border: "1px solid rgba(0,0,0,0.25)",
    return (
        <Box sx={{ p: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'lighter' }}>
                Pingpong
            </Typography>
            <pre>pingpong: {JSON.stringify(pingpong, null, 2)}</pre>
        </Box>
    )
}
