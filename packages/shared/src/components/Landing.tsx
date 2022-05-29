import * as React from 'react'
import { Box, Typography } from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    setCms,
    selectCms,
    selectSystem,
    routeTo,
} from '../listingslab-shared'

export default function Landing() {
    const cms = useAppSelector(selectCms)
    const system = useAppSelector(selectSystem)
    const dispatch = useAppDispatch()

    const [content, setContent] = React.useState({
        title: document.title,
    })

    React.useEffect(() => {
        const { refresh, location } = cms.data
        if (refresh) dispatch(setCms({ key: 'refresh', value: false }))
        const realhref = window.location.href
        const { baseURL } = system.ssr[0].data
        const nicePath = `${realhref.replace(baseURL, '')}`

        let title = 'Home'
        if (nicePath !== '/') title = nicePath.replace('/', '')

        setContent({
            title,
        })
        // console.warn("setContent")

        if (!location) {
            dispatch(routeTo({ pathname: nicePath }))
        }
    }, [cms, system, dispatch])

    const { title } = content

    return (
        <React.Fragment>
            <Box>
                <Typography variant="h5" sx={{ fontWeight: 'lighter' }}>
                    {title}
                </Typography>
            </Box>
        </React.Fragment>
    )
}

/*
    <pre>{JSON.stringify(cms, null, 2)}</pre>
    <pre>{JSON.stringify(content, null, 2)}</pre>
*/
