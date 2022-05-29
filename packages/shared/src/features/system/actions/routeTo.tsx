import { history } from '../../../Shared'
import { AppThunk } from '../../../app/store'
import { setSystemError, setCms } from '../../../listingslab-shared'

export interface RouteShape {
    pathname: string
}

export const routeTo =
    (route: RouteShape): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {
            const { baseURL } = getState().system.ssr[0].data
            const { pathname } = route
            const url = `${baseURL}${pathname}`
            const real = window.location
            const safe = {
                href: real.href,
                origin: real.origin,
                protocol: real.protocol,
                host: real.host,
                hostname: real.hostname,
                port: real.port,
                pathname: real.pathname,
                search: real.search,
                hash: real.hash,
            }
            dispatch(setCms({ key: 'baseURL', value: baseURL }))
            dispatch(setCms({ key: 'url', value: url }))
            dispatch(setCms({ key: 'location', value: safe }))
            dispatch(setCms({ key: 'refresh', value: true }))
            history.push(url)
        } catch (error) {
            dispatch(setSystemError(error))
        }
    }
