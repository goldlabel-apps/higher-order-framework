import { AppThunk } from '../../../app/store'
import { setSystemError } from '../'

export interface RouteShape {
    pathname: string
    target: string
}

export const changeRoute =
    (route: RouteShape): AppThunk =>
    async (dispatch: any) => {
        try {
            console.warn('navigateTo', route)
            let proceed = true
            const { pathname, target } = route
            // @ts-ignore
            const ssr = window.ssr
            let pathnameStr = pathname
            if (ssr) {
                if (target !== '_blank')
                    pathnameStr = `${ssr.baseURL}${pathnameStr}`
            }
            if (!pathname) proceed = false
            if (proceed) window.open(pathnameStr, target)
        } catch (error) {
            dispatch(setSystemError(error))
        }
    }
