import { AppThunk } from '../../../app/store'
import { setSystemError, setLayout } from '../'
// @ts-ignore

export const updateLayout =
    (clips: any): AppThunk =>
    async (dispatch: any) => {
        try {
            // dispatch(/*setLayout(flash.getStage()*/));
        } catch (error) {
            dispatch(setSystemError(error))
        }
    }
