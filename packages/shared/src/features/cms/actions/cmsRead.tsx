import { AppThunk } from '../../../app/store'

export const cmsRead =
    (payload: any): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {
            console.warn('cmsRead', payload)
        } catch (error) {
            console.warn('cmsRead error', error)
        }
    }
