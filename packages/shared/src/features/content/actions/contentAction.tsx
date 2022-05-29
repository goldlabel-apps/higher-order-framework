import { AppThunk } from '../../../app/store'

export const contentAction =
    (payload: any): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {
            console.warn('contentAction', payload)
        } catch (error) {
            console.warn('contentAction error', error)
        }
    }
