import { AppThunk } from '../../../app/store'

export const adminAction =
    (payload: any): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {
            console.warn('adminAction', payload)
        } catch (error) {
            console.warn('adminAction error', error)
        }
    }
