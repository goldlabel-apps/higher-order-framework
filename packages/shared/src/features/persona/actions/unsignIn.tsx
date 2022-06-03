import { getAuth, signOut } from 'firebase/auth'
import { AppThunk } from '../../../app/store'
import {
    // setSystemError,
    setPersona,
    setCore,
} from '../../../listingslab-shared'

export const unsignIn = (): AppThunk => async (dispatch: any) => {
    try {
        dispatch(setCore({ key: 'blocked', value: true }))

        const auth = getAuth()
        // setTimeout(() => {

        signOut(auth)
            .then(() => {
                dispatch(setCore({ key: 'blocked', value: false }))
                dispatch(
                    setPersona({
                        key: 'user',
                        value: {
                            uid: null,
                        },
                    })
                )
            })
            .catch((error) => {
                dispatch(setCore({ key: 'blocked', value: false }))
                // dispatch(setSystemError(error))
            })

        // }, 2000)
    } catch (error) {
        // dispatch(setSystemError(error))
    }
}
