import axios from 'axios'
import { AppThunk } from '../../../app/store'
import { setSystemError, setFingerprint } from '../'
import { ipgeolocationConfig } from '../../../env'

export const getIpgeolocation = (): AppThunk => async (dispatch: any) => {
    try {
        const { endpoint, apiKey } = ipgeolocationConfig
        dispatch(setFingerprint({ key: 'ipgeolocationLoading', value: true }))
        axios
            .get(`${endpoint}${apiKey}`)
            .then(function (response) {
                dispatch(
                    setFingerprint({
                        key: 'ipgeolocation',
                        value: response.data,
                    })
                )
                dispatch(
                    setFingerprint({
                        key: 'ipgeolocationLoading',
                        value: false,
                    })
                )
                dispatch(
                    setFingerprint({ key: 'ipgeolocationLoaded', value: true })
                )
            })
            .catch(function (error) {})
            .then(function () {
                return true
            })
    } catch (error) {
        dispatch(setSystemError(error))
    }
}
