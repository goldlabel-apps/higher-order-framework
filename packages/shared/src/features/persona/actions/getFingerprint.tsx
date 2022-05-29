import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'
import { AppThunk } from '../../../app/store'
import { fingerprintJSConfig } from '../../../env'
import { setSystemError, setPersona } from '../../../listingslab-shared'

export const getFingerprint = (): AppThunk => async (dispatch: any) => {
    try {
        dispatch(setPersona({ key: 'fingerprint', value: { loading: true } }))
        const { apiKey } = fingerprintJSConfig
        const fpPromise = FingerprintJS.load({
            apiKey,
            region: 'eu',
        })
        fpPromise
            .then((fp) => fp.get())
            .then((result) => {
                const fingerprint = {
                    data: {
                        visitorId: result.visitorId,
                    },
                    loading: false,
                    loaded: true,
                }
                dispatch(setPersona({ key: 'fingerprint', value: fingerprint }))
            })
    } catch (error) {
        console.warn('getFingerprint error', error)
    }
}
