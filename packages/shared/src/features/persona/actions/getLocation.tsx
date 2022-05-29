import axios from 'axios'
import { AppThunk } from '../../../app/store'
import { setSystemError, setPersona } from '../../../listingslab-shared'
import { ipgeolocationConfig } from '../../../env'

export const getLocation = (): AppThunk => async (dispatch: any) => {
    try {
        dispatch(setPersona({ key: 'location', value: { loading: true } }))
        const { endpoint, apiKey } = ipgeolocationConfig
        axios
            .get(`${endpoint}${apiKey}`)
            .then(function (response) {
                const location = {
                    data: response.data,
                    loading: false,
                    loaded: true,
                }
                dispatch(setPersona({ key: 'location', value: location }))
            })
            .catch(function (error) {})
            .then(function () {
                return true
            })
    } catch (error) {
        dispatch(setSystemError(error))
    }
}
