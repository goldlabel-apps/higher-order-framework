import { AppThunk } from '../../../app/store'
import { setSystemError } from '../../../listingslab-shared'

export const toggleAdmin =
    (open: boolean): AppThunk =>
    async (dispatch: any, getState: any) => {
        try {
            // dispatch(
            //   setAdmin({
            //     ...getState().system.admin,
            //     open,
            //   })
            // );
        } catch (error) {
            dispatch(setSystemError(error))
        }
    }
