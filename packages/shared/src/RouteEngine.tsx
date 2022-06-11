import * as React from 'react'
import { Box } from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    selectRoute,
    setCore,
    selectSSR,
} from './listingslab-shared'

export default function RouteEngine() {
    
    const dispatch = useAppDispatch()
    const route = useAppSelector(selectRoute)
    const ssr = useAppSelector(selectSSR)
    const windowLocation = window.location

    React.useEffect(() => {
        if (!route){
            console.warn('Route undefined. create.')
            let slug = `${windowLocation.href.replace(ssr[0].data.baseURL, "")}`
            if (slug === "") slug = "/"
            dispatch(setCore({ key: "route", value:{ slug } }))
        }
    }, [route, dispatch])
    
    return (
        <Box sx={{ border: "1px solid gold" }}>
            route <pre>{ JSON.stringify(route, null, 2)}</pre>
        </Box>
    )
}

/*
ssr <pre>{ JSON.stringify(ssr[0].data.baseURL, null, 2)}</pre>
 */
