import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { AppThunk } from '../../../app/store'
import {
    setCore,
} from '../../../listingslab-shared'

export const signIn =
    (email: string, password: string): AppThunk =>
    async (dispatch: any) => {
        try {
            const auth = getAuth()
            dispatch(setCore({ key: 'uid', value: null }))
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    dispatch(setCore({ key: 'uid', value: userCredential.user.uid }))
                    dispatch(setCore({ key: 'dialogSigninOpen', value: false }))
                })
                .catch((error) => {
                    // dispatch(setSystemError(error))
                })
        } catch (error) {
            // dispatch(setSystemError(error))
        }
    }
