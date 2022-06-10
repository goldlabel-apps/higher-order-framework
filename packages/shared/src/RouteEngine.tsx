import * as React from 'react'
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
        <div>
            route <pre>{ JSON.stringify(route, null, 2)}</pre>
        </div>
    )
}

/*
ssr <pre>{ JSON.stringify(ssr[0].data.baseURL, null, 2)}</pre>
 */
