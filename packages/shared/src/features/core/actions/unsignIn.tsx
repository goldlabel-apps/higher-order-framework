import { getAuth, signOut } from 'firebase/auth'
import { AppThunk } from '../../../app/store'
import {
    setCore,
} from '../../../listingslab-shared'

export const unsignIn = (): AppThunk => async (dispatch: any) => {
    try {
        const auth = getAuth()
        signOut(auth)
            .then(() => {
                dispatch(
                    setCore({
                        key: 'user',
                        value: {
                            uid: null,
                        },
                    })
                )
            })
            .catch((error) => {
                // dispatch(setSystemError(error))
            })
    } catch (error) {
        // dispatch(setSystemError(error))
    }
}
