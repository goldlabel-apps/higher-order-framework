import { AppThunk } from '../app/store'
// import { collection, query, getDocs } from 'firebase/firestore'
import { setPingpong } from '../listingslab-shared'

// import { setDataBus, cmsRead } from '../'
// import { db } from '../../../Shared'

export const pingpongInit = (): AppThunk => async (dispatch: any) => {
    try {
        console.warn('pingpongInit')
        // const value = { updated: Date.now() }
        dispatch(setPingpong({ key: 'fingerprint', value: 'do something good with hooks' }))
        // dispatch(cmsRead('sites'))
    } catch (error) {
        console.warn('pingpongInit error', error)
    }
}
