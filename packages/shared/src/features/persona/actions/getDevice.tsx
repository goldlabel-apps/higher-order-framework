import axios from 'axios'
import { AppThunk } from '../../../app/store'
import UAParser from 'ua-parser-js'
import { setSystemError, setPersona } from '../../../listingslab-shared'

export const getDevice = (): AppThunk => async (dispatch: any) => {
    try {
        dispatch(setPersona({ key: 'device', value: { loading: true } }))

        var parser = new UAParser()
        const device = {
            data: parser.getResult(),
            loading: false,
            loaded: true,
        }
        dispatch(setPersona({ key: 'device', value: device }))
    } catch (error) {
        dispatch(setSystemError(error))
    }
}
