import { history } from '../../../Shared'
import { AppThunk } from '../../../app/store'
import { setSystemError, setContent } from '../../../listingslab-shared'

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
            dispatch(setContent({ key: 'url', value: url }))
            history.push(url)
        } catch (error) {
            dispatch(setSystemError(error))
        }
    }
