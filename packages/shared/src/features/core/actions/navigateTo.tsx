import { AppThunk } from '../../../app/store'
import { history } from '../../../Shared'
import { setCore } from '../'

export interface RouteShape {
    pathname: string
}

export const navigateTo =
    (route: RouteShape): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {
            const { pathname } = route
            const { ssr } = getState().core.data
            const { baseURL } = ssr[0].data
            history.push(`${baseURL}${pathname}`)

            dispatch(setCore({ key: 'refresh', value: true }))
            return true
        } catch (error) {
            console.warn('navigateTo error', error)
        }
    }
